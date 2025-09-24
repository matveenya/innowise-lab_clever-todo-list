import { ref } from 'vue';

let nextId = 5;

const tasksByDate = ref({
  [new Date().toDateString()]: [
    {
      id: 1,
      text: 'New design for mobile UI',
      description: '',
      completed: false,
      date: new Date(),
    },
    { id: 2, text: 'Daily meeting with team', description: '', completed: false, date: new Date() },
    { id: 3, text: 'Meditation', description: '', completed: false, date: new Date() },
    { id: 4, text: 'Check emails', description: '', completed: false, date: new Date() },
  ],
});

export function useTasks() {
  const getTasksForDate = (date) => {
    const dateString = new Date(date).toDateString();
    return tasksByDate.value[dateString] || [];
  };

  const getTaskById = (taskId) => {
    for (const dateString in tasksByDate.value) {
      const task = tasksByDate.value[dateString].find((item) => item.id === taskId);
      if (task) return task;
    }
    return null;
  };

  const toggleTask = (date, taskId) => {
    const dateString = new Date(date).toDateString();
    if (tasksByDate.value[dateString]) {
      const task = tasksByDate.value[dateString].find((item) => item.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  };

  const addTask = (taskData) => {
    const date = new Date(taskData.date);
    date.setHours(12, 0, 0, 0);

    const dateString = date.toDateString();

    if (!tasksByDate.value[dateString]) {
      tasksByDate.value[dateString] = [];
    }

    const newTask = {
      id: nextId++,
      text: taskData.text,
      description: taskData.description || '',
      completed: false,
      date: date,
    };

    tasksByDate.value[dateString].push(newTask);
    return newTask;
  };

  const updateTask = (taskId, taskData) => {
    const task = getTaskById(taskId);
    if (!task) return;

    const oldDateString = new Date(task.date).toDateString();
    const newDateString = new Date(taskData.date).toDateString();

    task.text = taskData.text;
    task.description = taskData.description;
    task.date = new Date(taskData.date);

    if (oldDateString !== newDateString) {
      tasksByDate.value[oldDateString] = tasksByDate.value[oldDateString].filter(
        (t) => t.id !== taskId
      );

      if (!tasksByDate.value[newDateString]) {
        tasksByDate.value[newDateString] = [];
      }
      tasksByDate.value[newDateString].push(task);
    }
  };

  const deleteTask = (taskId) => {
    for (const dateString in tasksByDate.value) {
      const taskIndex = tasksByDate.value[dateString].findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasksByDate.value[dateString].splice(taskIndex, 1);
        break;
      }
    }
  };

  const getTaskStats = (date) => {
    const tasks = getTasksForDate(date);
    const completed = tasks.filter((task) => task.completed).length;
    const pending = tasks.filter((task) => !task.completed).length;

    return { completed, pending, total: tasks.length };
  };

  return {
    getTasksForDate,
    getTaskById,
    toggleTask,
    addTask,
    updateTask,
    deleteTask,
    getTaskStats,
  };
}
