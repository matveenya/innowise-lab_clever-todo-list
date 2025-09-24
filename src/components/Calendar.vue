<template>
    <section class="calendar">
        <ul class="calendar__list list">
            <li v-for="day in daysOfMonth" 
                :key="day.date.toString()"
                class="calendar__item item" 
                :class="{ 
                    'calendar__item_today': day.isToday,
                    'calendar__item_selected': day.isSelected 
                }"
                @click="selectDate(day)"
            >
                <span class="calendar__day-abbr">{{ day.dayAbbr }}</span>
                <span class="calendar__day-number">{{ day.dayNumber }}</span>
                    
                <div class="calendar__dots" v-if="day.taskStats.total > 0">
                    <span 
                        v-for="n in day.taskStats.pending" 
                        :key="'pending-' + n" 
                        class="calendar__dot calendar__dot--pending"
                    ></span>
                    <span 
                        v-for="n in day.taskStats.completed" 
                        :key="'completed-' + n" 
                        class="calendar__dot calendar__dot--completed"
                    ></span>
                </div>
            </li>
        </ul>
        <div class="calendar__scroll scroll"></div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useTasks } from '../composables/useTasks';

const { getTaskStats } = useTasks();
const selectedDate = ref(null);

const daysOfMonth = computed(() => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    
    let currentDay = new Date(today);
    
    while (currentDay.getMonth() === currentMonth) {
        const isToday = currentDay.toDateString() === today.toDateString();
        const dateString = currentDay.toDateString();
        const taskStats = getTaskStats(currentDay);
        
        days.push({
            date: new Date(currentDay),
            dayAbbr: currentDay.toLocaleDateString('en-US', { weekday: 'short' }),
            dayNumber: currentDay.getDate(),
            isToday,
            isSelected: selectedDate.value === dateString,
            taskStats 
        });
        
        currentDay.setDate(currentDay.getDate() + 1);
    }
    
    return days;
});

const selectDate = (day) => {
    selectedDate.value = day.date.toDateString();
}
</script>

<style scoped lang="scss">
.calendar{
    background-color: #fafafa;
    padding: 10px 20px;

    &__scroll{
        overflow-x: auto;
        scroll-behavior: smooth;
    }

    &__list{
        display: flex;
        gap: 8px;
        min-width: max-content;
    }

    &__item{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 12px;
        border-radius: 12px;
        cursor: pointer;
        min-width: 60px;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        flex-shrink: 0;

        &:hover{
            background-color: #fff5f0;
        }
        
        &_today{
            background-color: #000;
            color: #fff;
            
            .calendar__day-abbr,
            .calendar__day-number {
                color: #fff;
            }
            
            .calendar__dot--pending {
                background-color: #ffa500;
            }
            
            .calendar__dot--completed {
                background-color: #ccc;
            }
            
            &:hover{
                background-color: #464646;
            }
        }

        &_selected{
            border: 2px solid #ff6b35;
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
            margin-bottom: 6px;
        }
    }

    &__dots{
        display: flex;
        gap: 2px;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 40px;
    }

    &__dot{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
        
        &--pending{
            background-color: #ff6b35;
        }
        
        &--completed{
            background-color: #e0e0e0;
        }
    }
}
</style>