<template>
  <div class="task-editor-page">
    <header class="task-editor__header">
      <button class="task-editor__back" @click="goBack">← Back</button>
      <h1 class="task-editor__title">{{ isEditing ? 'Edit Task' : 'Add a New Task' }}</h1>
      <div style="width: 80px"></div>
    </header>

    <main class="task-editor__main">
      <form class="task-editor__form" @submit.prevent="saveTask">
        <div class="task-editor__field">
          <label class="task-editor__label">Title *</label>
          <input
            v-model="form.title"
            type="text"
            class="task-editor__input"
            placeholder="Enter task title"
            required
          />
        </div>

        <div class="task-editor__field">
          <label class="task-editor__label">Description</label>
          <textarea
            v-model="form.description"
            class="task-editor__textarea"
            placeholder="Enter task description (optional)"
            rows="4"
          ></textarea>
        </div>

        <div class="task-editor__field">
          <label class="task-editor__label">Date *</label>
          <input v-model="form.date" type="date" class="task-editor__input" required />
        </div>

        <div v-if="error" class="task-editor__error">
          {{ error }}
        </div>

        <div class="task-editor__actions">
          <button type="button" class="task-editor__cancel" @click="goBack">Cancel</button>
          <button type="submit" class="task-editor__save" :disabled="!form.title.trim() || loading">
            {{ loading ? 'Saving...' : isEditing ? 'Update' : 'Save' }}
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTasks } from '../composables/useTasks';

const router = useRouter();
const route = useRoute();

const { addTask, updateTask, getTaskById } = useTasks();

const form = ref({
  title: '',
  description: '',
  date: '',
});

const loading = ref(false);
const error = ref('');

const isEditing = computed(() => route.name === 'task-edit');

onMounted(async () => {
  if (isEditing.value) {
    const taskId = route.params.id;
    const task = await getTaskById(taskId);

    if (task) {
      form.value = {
        title: task.text,
        description: task.description || '',
        date: formatDateForInput(task.date),
      };
    } else {
      error.value = 'Task not found';
    }
  } else {
    const defaultDate = route.query.date ? new Date(route.query.date) : new Date();
    form.value.date = formatDateForInput(defaultDate);
  }
});

const formatDateForInput = (date) => {
  const d = new Date(date);
  d.setHours(12, 0, 0, 0);
  return d.toISOString().split('T')[0];
};

const goBack = () => {
  router.back();
};

const saveTask = async () => {
  if (!form.value.title.trim()) return;

  loading.value = true;
  error.value = '';

  const taskData = {
    text: form.value.title.trim(),
    description: form.value.description.trim(),
    date: new Date(form.value.date),
  };

  try {
    let result;

    if (isEditing.value) {
      const taskId = route.params.id;
      result = await updateTask(taskId, taskData);
    } else {
      result = await addTask(taskData);
    }

    if (result.success) {
      router.push('/');
    } else {
      error.value = result.error || 'Failed to save task';
    }
  } catch (err) {
    error.value = 'An unexpected error occurred';
    console.error('Save task error:', err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.task-editor-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
}

.task-editor__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);

  .task-editor__back {
    background: none;
    border: 2px solid #ff6b35;
    color: #ff6b35;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background: #ff6b35;
      color: white;
    }
  }

  .task-editor__title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin: 0;
    text-align: center;
  }
}

.task-editor__main {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.task-editor__form {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.task-editor__field {
  margin-bottom: 24px;
}

.task-editor__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.task-editor__input,
.task-editor__textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }
}

.task-editor__textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.task-editor__error {
  background: #fee;
  color: #c33;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
}

.task-editor__actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 30px;
}

.task-editor__cancel,
.task-editor__save {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.task-editor__cancel {
  background-color: #f5f5f5;
  color: #666;

  &:hover {
    background-color: #e0e0e0;
  }
}

.task-editor__save {
  background-color: #ff6b35;
  color: white;

  &:hover:not(:disabled) {
    background-color: #e55a2b;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
}

@media (max-width: 768px) {
  .task-editor__form {
    padding: 20px;
    margin: 0 10px;
  }

  .task-editor__header {
    padding: 15px;

    .task-editor__title {
      font-size: 20px;
    }
  }
}
</style>
