import { ref } from 'vue';

const tasksByDate = ref({
  [new Date().toDateString()]: [
    { id: 1, text: 'New design for mobile UI', completed: false },
    { id: 2, text: 'Daily meeting with team', completed: false },
    { id: 3, text: 'Meditation', completed: false },
    { id: 4, text: 'Check emails', completed: false },
  ],
});

export function useTasks() {
  const getTasksForDate = (date) => {
    const dateString = new Date(date).toDateString();
    return tasksByDate.value[dateString] || [];
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

  const getTaskStats = (date) => {
    const tasks = getTasksForDate(date);
    const completed = tasks.filter((task) => task.completed).length;
    const pending = tasks.filter((task) => !task.completed).length;

    return { completed, pending, total: tasks.length };
  };

  return {
    getTasksForDate,
    toggleTask,
    getTaskStats,
  };
}
