import { ref, computed } from 'vue';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/config';

const user = ref(null);
const loading = ref(true);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
  loading.value = false;

  if (_user) {
    localStorage.setItem('userEmail', _user.email);
  } else {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
  }
});

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value);
  const currentUser = computed(() => user.value);

  const register = async (email, password, fullName) => {
    try {
      loading.value = true;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        localStorage.setItem('userName', fullName);
      }

      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      loading.value = false;
    }
  };

  const login = async (email, password) => {
    try {
      loading.value = true;
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      loading.value = true;
      await signOut(auth);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      loading.value = false;
    }
  };

  return {
    user: currentUser,
    isAuthenticated,
    loading: computed(() => loading.value),
    register,
    login,
    logout,
  };
}
