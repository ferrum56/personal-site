import type { RouteRecordRaw } from 'vue-router';

// See https://router.vuejs.org/guide/advanced/lazy-loading.html
const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');

export const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/skills', name: 'skills', component: HomeView },
    { path: '/projects', name: 'projects', component: HomeView },
    { path: '/misc', name: 'miscellaneous', component: HomeView },
    { path: '/contact', name: 'contact', component: HomeView },
];
