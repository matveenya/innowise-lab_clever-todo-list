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
            </li>
        </ul>
        <div class="calendar__scroll scroll"></div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const selectedDate = ref(null);

const daysOfMonth = computed(() => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    
    let currentDay = new Date(today);
    
    while (currentDay.getMonth() === currentMonth) {
        const isToday = currentDay.toDateString() === today.toDateString();
        const dateString = currentDay.toDateString();
        
        days.push({
            date: new Date(currentDay),
            dayAbbr: currentDay.toLocaleDateString('en-US', { weekday: 'short' }),
            dayNumber: currentDay.getDate(),
            isToday,
            isSelected: selectedDate.value === dateString
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
        
        &_today{
            background-color: #000;
            color: #fff;
            
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
            margin-bottom: 4px;
        }
    }

    &__scroll{
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding: 10px 20px;
    }
}
</style>