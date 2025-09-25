import { ref, computed } from 'vue';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './useAuth';

const tasks = ref([]);
const loading = ref(false);

export function useTasks() {
  const { user } = useAuth();

  const getTasksForDate = async (date) => {
    if (!user.value) return [];

    const dateObj = new Date(date);
    dateObj.setHours(0, 0, 0, 0);
    const startOfDay = new Date(dateObj);
    const endOfDay = new Date(dateObj);
    endOfDay.setHours(23, 59, 59, 999);

    try {
      loading.value = true;
      const q = query(
        collection(db, 'tasks'),
        where('userId', '==', user.value.uid),
        where('date', '>=', startOfDay),
        where('date', '<=', endOfDay),
        orderBy('date', 'asc')
      );

      const querySnapshot = await getDocs(q);
      const tasksList = [];
      querySnapshot.forEach((doc) => {
        tasksList.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return tasksList;
    } catch (error) {
      console.error('Error getting tasks:', error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  const getTaskById = async (taskId) => {
    if (!user.value) return null;

    try {
      const q = query(
        collection(db, 'tasks'),
        where('userId', '==', user.value.uid),
        where('__name__', '==', taskId)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data(),
        };
      }
      return null;
    } catch (error) {
      console.error('Error getting task:', error);
      return null;
    }
  };

  const toggleTask = async (taskId, completed) => {
    if (!user.value) return { success: false, error: 'Not authenticated' };

    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, {
        completed: completed,
        updatedAt: new Date(),
      });
      return { success: true, error: null };
    } catch (error) {
      console.error('Error updating task:', error);
      return { success: false, error: error.message };
    }
  };

  const addTask = async (taskData) => {
    if (!user.value) return { success: false, error: 'Not authenticated', task: null };

    try {
      const taskWithUser = {
        ...taskData,
        userId: user.value.uid,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const docRef = await addDoc(collection(db, 'tasks'), taskWithUser);
      return {
        success: true,
        error: null,
        task: { id: docRef.id, ...taskWithUser },
      };
    } catch (error) {
      console.error('Error adding task:', error);
      return { success: false, error: error.message, task: null };
    }
  };

  const updateTask = async (taskId, taskData) => {
    if (!user.value) return { success: false, error: 'Not authenticated' };

    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, {
        ...taskData,
        updatedAt: new Date(),
      });
      return { success: true, error: null };
    } catch (error) {
      console.error('Error updating task:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteTask = async (taskId) => {
    if (!user.value) return { success: false, error: 'Not authenticated' };

    try {
      await deleteDoc(doc(db, 'tasks', taskId));
      return { success: true, error: null };
    } catch (error) {
      console.error('Error deleting task:', error);
      return { success: false, error: error.message };
    }
  };

  const getTaskStats = async (date) => {
    if (!user.value) {
      return { completed: 0, pending: 0, total: 0 };
    }

    try {
      const dateObj = new Date(date);
      dateObj.setHours(0, 0, 0, 0);
      const startOfDay = new Date(dateObj);
      const endOfDay = new Date(dateObj);
      endOfDay.setHours(23, 59, 59, 999);

      const q = query(
        collection(db, 'tasks'),
        where('userId', '==', user.value.uid),
        where('date', '>=', startOfDay),
        where('date', '<=', endOfDay)
      );

      const querySnapshot = await getDocs(q);
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const completed = tasks.filter((task) => task.completed).length;
      const pending = tasks.filter((task) => !task.completed).length;

      return { completed, pending, total: tasks.length };
    } catch (error) {
      console.error('Error getting task stats:', error);
      return { completed: 0, pending: 0, total: 0 };
    }
  };

  const subscribeToTaskStats = (callback) => {
    if (!user.value) return () => {};

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const q = query(
      collection(db, 'tasks'),
      where('userId', '==', user.value.uid),
      where('date', '>=', threeMonthsAgo),
      orderBy('date', 'asc')
    );

    return onSnapshot(q, (querySnapshot) => {
      const tasksByDate = {};

      querySnapshot.forEach((doc) => {
        const task = {
          id: doc.id,
          ...doc.data(),
        };

        const dateString = new Date(
          task.date.toDate ? task.date.toDate() : task.date
        ).toDateString();

        if (!tasksByDate[dateString]) {
          tasksByDate[dateString] = [];
        }

        tasksByDate[dateString].push(task);
      });

      const statsByDate = {};
      Object.keys(tasksByDate).forEach((dateString) => {
        const tasks = tasksByDate[dateString];
        const completed = tasks.filter((task) => task.completed).length;
        const pending = tasks.filter((task) => !task.completed).length;

        statsByDate[dateString] = {
          completed,
          pending,
          total: tasks.length,
        };
      });

      callback(statsByDate);
    });
  };

  return {
    tasks: computed(() => tasks.value),
    loading: computed(() => loading.value),
    getTasksForDate,
    getTaskById,
    toggleTask,
    addTask,
    updateTask,
    deleteTask,
    getTaskStats,
    subscribeToTaskStats,
  };
}
