<template>
  <section class="tasks">
    <header class="tasks__header">
      <h2 class="tasks__title title">{{ taskTitle }}</h2>
    </header>

    <div v-if="loading" class="tasks-loading">Loading tasks...</div>
    <div v-else-if="error" class="tasks-error">{{ error }}</div>

    <ul v-else class="tasks__list list">
      <li v-for="task in currentTasks" :key="task.id" class="tasks__item item">
        <button
          class="tasks__checkbox checkbox"
          :class="{ checked: task.completed }"
          @click="handleToggleTask(task)"
          :disabled="toggleLoading[task.id]"
        >
          <span v-if="task.completed" style="color: #fff">✓</span>
        </button>
        <span class="tasks__text" :class="{ completed: task.completed }">{{ task.text }}</span>
        <button class="tasks__edit" @click="editTask(task)">✎</button>
        <button class="tasks__delete" @click="deleteTask(task)" :disabled="deleteLoading[task.id]">
          🗑️
        </button>
      </li>

      <li v-if="currentTasks.length === 0" class="tasks__empty">
        No tasks for this date. Click "Add a New Task" to create one!
      </li>
    </ul>

    <div class="tasks__button-container">
      <button class="tasks__add-button" @click="createTask">+ Add a New Task</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTasks } from '../composables/useTasks';
import { useAuth } from '../composables/useAuth';

const router = useRouter();
const props = defineProps({
  selectedDate: {
    type: String,
    default: null,
  },
});

const {
  getTasksForDate,
  toggleTask,
  deleteTask: deleteTaskInStore,
  subscribeToTaskStats,
} = useTasks();
const { isAuthenticated } = useAuth();

const currentTasks = ref([]);
const loading = ref(false);
const error = ref('');
const toggleLoading = ref({});
const deleteLoading = ref({});

let unsubscribeTasks = null;

const loadTasks = async () => {
  if (!isAuthenticated.value) {
    currentTasks.value = [];
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const date = props.selectedDate ? new Date(props.selectedDate) : new Date();
    currentTasks.value = await getTasksForDate(date);
  } catch (err) {
    error.value = 'Failed to load tasks';
    console.error('Error loading tasks:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  unsubscribeTasks = subscribeToTaskStats(() => {
    loadTasks();
  });
});

onUnmounted(() => {
  if (unsubscribeTasks) {
    unsubscribeTasks();
  }
});

watch(
  [() => props.selectedDate, isAuthenticated],
  () => {
    loadTasks();
  },
  { immediate: true }
);

const taskTitle = computed(() => {
  const activeTasks = currentTasks.value.filter((task) => !task.completed).length;
  const selectedDate = props.selectedDate ? new Date(props.selectedDate) : new Date();
  const today = new Date();

  let title = `${activeTasks} Task${activeTasks !== 1 ? 's' : ''}`;

  if (selectedDate.toDateString() === today.toDateString()) {
    title += ' Today';
  } else {
    title += ` on ${selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
  }

  return title;
});

const handleToggleTask = async (task) => {
  if (!isAuthenticated.value) return;

  toggleLoading.value[task.id] = true;
  try {
    const result = await toggleTask(task.id, !task.completed);
    if (!result.success) {
      error.value = result.error || 'Failed to update task';
    }
  } catch (err) {
    error.value = 'Error updating task';
    console.error('Toggle task error:', err);
  } finally {
    toggleLoading.value[task.id] = false;
  }
};

const createTask = () => {
  if (!isAuthenticated.value) {
    router.push('/signin');
    return;
  }

  const dateParam = props.selectedDate ? `?date=${props.selectedDate}` : '';
  router.push(`/task/new${dateParam}`);
};

const editTask = (task) => {
  router.push(`/task/edit/${task.id}`);
};

const deleteTask = async (task) => {
  if (!isAuthenticated.value) return;

  if (!confirm('Are you sure you want to delete this task?')) return;

  deleteLoading.value[task.id] = true;
  try {
    const result = await deleteTaskInStore(task.id);
    if (!result.success) {
      error.value = result.error || 'Failed to delete task';
    }
  } catch (err) {
    error.value = 'Error deleting task';
    console.error('Delete task error:', err);
  } finally {
    deleteLoading.value[task.id] = false;
  }
};
</script>

<style scoped lang="scss">
.tasks {
  padding: 20px;
  flex: 1;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  &__list {
    margin-bottom: 20px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;

    &:last-child {
      border-bottom: none;
    }
  }

  &__empty {
    text-align: center;
    padding: 40px 20px;
    color: #666;
    font-style: italic;
  }

  &__checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #ff6b35;
    border-radius: 50%;
    margin-right: 12px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.checked {
      background-color: #ff6b35;
    }
  }

  &__text {
    font-size: 16px;
    color: #333;
    transition: all 0.2s ease;
    flex: 1;

    &.completed {
      color: #999;
      text-decoration: line-through;
    }
  }

  &__edit,
  &__delete {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s ease;
    opacity: 0.7;
    font-size: 14px;
    margin-left: 4px;

    &:hover:not(:disabled) {
      background-color: #f5f5f5;
      color: #333;
      opacity: 1;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__add-button {
    width: 100%;
    padding: 15px;
    background: #ff6b35;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #e55a2b;
      transform: translateY(-1px);
    }
  }
}

.tasks-loading,
.tasks-error {
  text-align: center;
  padding: 20px;
  color: #666;
}

.tasks-error {
  color: #c33;
  background: #fee;
  border-radius: 8px;
  margin: 10px 0;
}
</style>
