<template>
    <div class="task-editor-page">
        <header class="task-editor__header">
            <button class="task-editor__back" @click="goBack">← Back</button>
            <h1 class="task-editor__title">{{ isEditing ? 'Edit Task' : 'Add a New Task' }}</h1>
            <div style="width: 80px;"></div>
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
                    >
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
                    <input 
                        v-model="form.date"
                        type="date" 
                        class="task-editor__input"
                        required
                    >
                </div>
                
                <div class="task-editor__actions">
                    <button 
                        type="button" 
                        class="task-editor__cancel"
                        @click="goBack"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        class="task-editor__save"
                        :disabled="!form.title.trim()"
                    >
                        {{ isEditing ? 'Update' : 'Save' }}
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
    date: ''
});

const isEditing = computed(() => route.name === 'task-edit');

onMounted(() => {
    if (isEditing.value) {
        const taskId = parseInt(route.params.id);
        const task = getTaskById(taskId);
        
        if (task) {
            form.value = {
                title: task.text,
                description: task.description || '',
                date: new Date(task.date).toISOString().split('T')[0]
            };
        }
    } else {
        const defaultDate = route.query.date ? new Date(route.query.date) : new Date();
        form.value.date = defaultDate.toISOString().split('T')[0];
    }
});

const goBack = () => {
    router.back();
};

const saveTask = () => {
    if (!form.value.title.trim()) return;

    const taskData = {
        text: form.value.title.trim(),
        description: form.value.description.trim(),
        date: new Date(form.value.date)
    };

    if (isEditing.value) {
        const taskId = parseInt(route.params.id);
        updateTask(taskId, taskData);
    } else {
        addTask(taskData);
    }

    router.push('/');
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