<template>
    <main class="app-container">
        <header class="header">
            <h1 class="header__title title">Tassker</h1>
        </header>

        <section class="calendar">
            <ul class="calendar__list list">
                <li class="calendar__item item">
                    <span class="calendar__day-abbr">Wen</span>
                    <span class="calendar__day-number">4</span>
                </li>
                <li class="calendar__item item">
                    <span class="calendar__day-abbr">Thu</span>
                    <span class="calendar__day-number">5</span>
                </li>
                <li class="calendar__item item">
                    <span class="calendar__day-abbr">Fri</span>
                    <span class="calendar__day-number">6</span>
                </li>
                <li class="calendar__item item">
                    <span class="calendar__day-abbr">Sat</span>
                    <span class="calendar__day-number">7</span>
                </li>
                <li class="calendar__item item">
                    <span class="calendar__day-abbr">Sun</span>
                    <span class="calendar__day-number">8</span>
                </li>
            </ul>
            <div class="calendar__scroll scroll"></div>
        </section>

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

    .header{
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;

        &__title{
            font-size: 24px;
            font-weight: 700;
            color: #333;
            text-align: left;
        }
    }

    .calendar{
        background-color: #fafafa;

        &__list{
            display: flex;
            gap: 8px;
        }

        &__item{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 12px;
            border-radius: 12px;
            cursor: pointer;
            min-width: 50px;
            background-color: #fff;
            border: 1px solid #e0e0e0;
            flex-shrink: 0;

            &:hover{
                background-color: #fff5f0;
            }
        }

        &__day{
            &-abbr{
                font-size: 11px;
                font-weight: 500;
                margin-bottom: 4px;
                color: #666;
            }

            &-number{
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 4px;
            }
        }

        &__scroll{
            scroll-behavior: smooth;
            overscroll-behavior-x: contain;
        }
    }

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