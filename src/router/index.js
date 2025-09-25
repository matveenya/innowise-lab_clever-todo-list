import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import TaskEditor from '../components/TaskEditor.vue';
import SignIn from '../components/SignIn.vue';
import Register from '../components/Register.vue';
import { auth } from '../firebase/config';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/task/new',
    name: 'task-create',
    component: TaskEditor,
    meta: { requiresAuth: true },
    props: (route) => ({
      initialDate: route.query.date
        ? new Date(route.query.date).toDateString()
        : new Date().toDateString(),
    }),
  },
  {
    path: '/task/edit/:id',
    name: 'task-edit',
    component: TaskEditor,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    meta: { requiresGuest: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresGuest: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    const isAuthenticated = !!user;

    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/signin');
    } else if (to.meta.requiresGuest && isAuthenticated) {
      next('/');
    } else {
      next();
    }

    unsubscribe();
  });
});

export default router;
