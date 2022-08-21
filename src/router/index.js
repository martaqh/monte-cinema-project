import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/pages/LandingPage.vue'),

    },
    {
        path: '/screenings',
        name: 'Screenings',
        component: () => import('@/components/views/ScreeningsFilters.vue'),
    },

    {
        path: '/movies',
        name: 'Movies',
        component: () => import ('@/components/views/MoviesSummary.vue'),

    },
  /*  {
        path: '/movies/:movieId',
        name: 'MoviePage',
        props: true,
        component: () => import ('@/components/views/MovieCard.vue'),

    }, */
    {
        path: '/:path*',
        redirect: '/no-match'
    },
    {
        path: '/no-match',
        name: 'NoMatch',
        component: () => import ('@/components/views/NoMatch.vue'),
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
