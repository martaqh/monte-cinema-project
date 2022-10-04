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
    name: 'SingleMovie',
    component: () => import('@/components/pages/SingleMoviePage.vue'),
    props: true,
  },
  {
    path: '/screenings',
    name: 'Screenings',
    component: () => import('@/components/pages/ScreeningsPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/pages/RegistrationPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/pages/LoginPage.vue'),
  },
  {
    path: '/choose-seats/:screeningId',
    name: 'ChooseSeatsPage',
    component: () => import('@/components/pages/ChooseSeatsPage.vue'),
    props: true
  },
  {
    path: '/choose-tickets',
    name: 'ChooseTicketsPage',
    component: () => import('@/components/pages/ChooseTicketsPage.vue'),
    props: true
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
