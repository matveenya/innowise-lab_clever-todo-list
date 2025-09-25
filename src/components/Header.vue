<template>
  <header class="header">
    <h1 class="header__title title">Tassker</h1>
    <div class="header__user" v-if="isAuthenticated && user">
      <span class="header__welcome">Welcome, {{ userName }}</span>
      <button class="header__logout" @click="handleLogout" :disabled="loading">
        {{ loading ? 'Logging out...' : 'Logout' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const router = useRouter();
const { user, isAuthenticated, logout, loading } = useAuth();

const userName = computed(() => {
  return localStorage.getItem('userName') || user.value?.email || 'User';
});

const handleLogout = async () => {
  const result = await logout();
  if (result.success) {
    router.push('/signin');
  } else {
    console.error('Logout error:', result.error);
  }
};
</script>

<style scoped lang="scss">
.header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__welcome {
    font-size: 14px;
    color: #666;
  }

  &__logout {
    background: #ff6b35;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: #e55a2b;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
