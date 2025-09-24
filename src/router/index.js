import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import TaskEditor from '../components/TaskEditor.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/task/new',
    name: 'task-create',
    component: TaskEditor,
    props: (route) => ({
      initialDate: route.query.date,
    }),
  },
  {
    path: '/task/edit/:id',
    name: 'task-edit',
    component: TaskEditor,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
