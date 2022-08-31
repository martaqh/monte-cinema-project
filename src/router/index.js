import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
  },
  {
    path: '/no-match',
    name: 'NoMatch',
    component: () => import ('@/components/pages/NoMatch.vue'),
  },
  {
    path: '/:path*',
    redirect: '/no-match'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
