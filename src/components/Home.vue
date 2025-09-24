<template>
  <div class="home">
    <Calendar @date-selected="handleDateSelected" />
    <Tasks :selected-date="selectedDate" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Calendar from './Calendar.vue';
import Tasks from './Tasks.vue';

const selectedDate = ref(null);

const handleDateSelected = (date) => {
  selectedDate.value = date;
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
}
</style>
