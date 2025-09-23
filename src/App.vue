<template>
    <main class="app-container">
        <Header />
        <Calendar/>
        <Tasks/>
    </main>
</template>
<script setup>
import Calendar from './components/Calendar.vue';
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';

 

</script>
<style scoped lang="scss">
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
}
</style>