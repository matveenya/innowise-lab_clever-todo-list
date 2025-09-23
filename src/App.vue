<template>
    <main class="app-container">
        <Header />
        <Calendar/>

        <section class="tasks">
            <header class="tasks__header">
                <h2 class="tasks__title title">5 Tasks Today</h2>
            </header>

            <ul class="tasks__list list">
                <li class="tasks__item item">
                    <button class="tasks__checkbox checkbox"></button>
                    <span class="tasks__text">New design for mobile UI</span>
                </li>
                <li class="tasks__item item">
                    <button class="tasks__checkbox checkbox"></button>
                    <span class="tasks__text">Daily meeting with team</span>
                </li>
                <li class="tasks__item item">
                    <button class="tasks__checkbox checkbox"></button>
                    <span class="tasks__text">Meditation</span>
                </li>
                <li class="tasks__item item">
                    <button class="tasks__checkbox checkbox"></button>
                    <span class="tasks__text">Check emails</span>
                </li>
            </ul>
            <div class="tasks__button-container">
                <button class="tasks__add-button">+ Add a New Task</button>
            </div>
        </section>
    </main>
</template>
<script setup>
import Calendar from './components/Calendar.vue';
import Header from './components/Header.vue';

 

</script>
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

.item{
    list-style-type: none;
}

.app-container{
    max-width: 762px;
    margin: 0 auto;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

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
}
</style>