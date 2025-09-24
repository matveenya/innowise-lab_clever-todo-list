<template>
  <div class="auth-page">
    <div class="auth-container">
      <header class="auth-header">
        <h1 class="auth-title">Create Account</h1>
        <p class="auth-subtitle">Join Tassker and start managing your tasks efficiently.</p>
      </header>

      <form class="auth-form" @submit.prevent="handleRegister">
        <div class="auth-field">
          <label class="auth-label">Full Name</label>
          <input
            v-model="form.fullName"
            type="text"
            class="auth-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="auth-field">
          <label class="auth-label">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="auth-input"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="auth-field">
          <label class="auth-label">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="auth-input"
            placeholder="Create a password"
            required
          />
        </div>

        <div class="auth-field">
          <label class="auth-label">Confirm Password</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            class="auth-input"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" class="auth-button" :disabled="loading || !passwordsMatch">
          {{ loading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>

      <footer class="auth-footer">
        <p>Already have an account? 
          <router-link to="/signin" class="auth-link">Sign in</router-link>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const passwordsMatch = computed(() => {
  return form.value.password === form.value.confirmPassword && form.value.password.length > 0;
});

const handleRegister = async () => {
  loading.value = true;
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (form.value.email && form.value.password && passwordsMatch.value) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', form.value.email);
      localStorage.setItem('userName', form.value.fullName);
      router.push('/');
    }
  } catch (error) {
    console.error('Registration error:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.auth-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-container {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.auth-header {
  text-align: center;
  margin-bottom: 30px;
}

.auth-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.auth-subtitle {
  color: #666;
  font-size: 14px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.auth-field {
  display: flex;
  flex-direction: column;
}

.auth-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.auth-input {
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ff6b35;
  }
}

.auth-button {
  padding: 12px;
  background-color: #ff6b35;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    background-color: #e55a2b;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
}

.auth-footer {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  color: #666;
  font-size: 14px;
}

.auth-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}

@media (max-width: 480px) {
  .auth-container {
    padding: 20px;
    margin: 10px;
  }
}
</style>