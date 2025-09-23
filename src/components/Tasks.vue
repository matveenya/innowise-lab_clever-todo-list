<template>
    <section class="tasks">
        <header class="tasks__header">
            <h2 class="tasks__title title">{{ taskTitle }}</h2>
        </header>

        <ul class="tasks__list list">
            <li v-for="task in tasks" :key="task.id" class="tasks__item item">
                <button class="tasks__checkbox checkbox" :class="{'checked': task.completed}" @click="toggleTask(task.id)">
                    <span v-if="task.completed" style="color: #fff">✓</span>
                </button>
                <span class="tasks__text" :class="{'completed': task.completed}">{{ task.text }}</span>
            </li>
        </ul>
        <div class="tasks__button-container">
            <button class="tasks__add-button">+ Add a New Task</button>
        </div>
    </section>
</template>
<script setup>
import { ref,computed } from 'vue';
const tasks = ref([
    {id: 1,text: 'New design for mobile UI', completed: false},
    {id: 2,text: 'Daily meeting with team', completed: false},
    {id: 3,text: 'Meditation', completed: false},
    {id: 4,text: 'Check emails', completed: false},
]);

const taskTitle = computed(() => {
    const activeTasks = tasks.value.filter(task => !task.completed).length;
    return `${activeTasks} Task${activeTasks !== 1 ? 's' : ''} Today`;
});

const toggleTask = (taskId) => {
    const task = tasks.value.find(item => item.id === taskId);
    task.completed = !task.completed;
}
</script>
<style scoped lang="scss">
.tasks{
    padding: 20px;

    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    &__title{
        font-size: 18px;
        font-weight: 600;
        color: #333;
    }

    &__list{
        margin-bottom: 20px;
    }

    &__item{
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;

        .checked{
            background-color: #ff6b35;
        }

        .completed{
            color: #999;
            text-decoration: line-through;
        }
    }

    &__checkbox{
        width: 20px;
        height: 20px;
        border: 2px solid #f5b350f9;
        border-radius: 50%;
        margin-right: 12px;
        cursor: pointer;
        flex-shrink: 0;
        background-color: #fff;
    }

    &__text{
        font-size: 16px;
        color: #333;
    }

    &__add{
        &-button{
            width: 100%;
            padding: 15px;
            background: #ff6b35;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;

            &:hover{
                background-color: #e55a2b;
            }

        }
    }
}
</style>