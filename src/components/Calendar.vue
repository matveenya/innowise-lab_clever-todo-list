<template>
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
</template>
<script setup>
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
</style>