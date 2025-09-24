<template>
    <header class="header">
        <h1 class="header__title title">Tassker</h1>
        <div class="header__user" v-if="isAuthenticated">
            <span class="header__welcome">Welcome, {{ userName }}</span>
            <button class="header__logout" @click="handleLogout">Logout</button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isAuthenticated = ref(false);
const userName = ref('');

onMounted(() => {
    checkAuth();
});

const checkAuth = () => {
    isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true';
    userName.value = localStorage.getItem('userName') || localStorage.getItem('userEmail') || 'User';
};

const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    router.push('/signin');
};
</script>

<style scoped lang="scss">
.header{
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title{
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

        &:hover {
            background: #e55a2b;
        }
    }
}
</style>
