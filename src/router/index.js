import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('@/components/pages/AllMoviesPage.vue'),
  },
  {
    path: '/movies/:movieId',
    name: 'SingleMoviePage',
    component: () => import('@/components/pages/SingleMoviePage.vue'),
    props: true,
  },
  {
    path: '/screenings',
    name: 'Screenings',
    component: () => import('@/components/pages/ScreeningsPage.vue'),
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
