<template>
  <main class="app-container">
    <Header />
    <RouterView v-if="authInitialized" />
    <div v-else class="loading-container">
      <div class="loading-spinner">Loading...</div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const authInitialized = ref(false);

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    authInitialized.value = true;
    unsubscribe();
  });
});
</script>

<style scoped lang="scss">
.item {
  list-style-type: none;
}

.app-container {
  max-width: 762px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.loading-spinner {
  color: #666;
  font-size: 16px;
}
</style>
