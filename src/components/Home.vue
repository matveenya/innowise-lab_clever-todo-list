<template>
  <div class="home">
    <Calendar @date-selected="handleDateSelected" :key="calendarKey" />
    <Tasks :selected-date="selectedDate" :key="tasksKey" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useAuth } from '../composables/useAuth';
import Calendar from './Calendar.vue';
import Tasks from './Tasks.vue';

const { isAuthenticated } = useAuth();
const selectedDate = ref(new Date().toDateString());
const calendarKey = ref(0);
const tasksKey = ref(0);

const handleDateSelected = (date) => {
  selectedDate.value = date;
};

watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    calendarKey.value++;
    tasksKey.value++;
  }
});

onMounted(() => {
  selectedDate.value = new Date().toDateString();
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
}
</style>
