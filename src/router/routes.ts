import type { RouteRecordRaw } from 'vue-router';

// See https://router.vuejs.org/guide/advanced/lazy-loading.html
const HomeView = () => import('@/views/HomeView.vue');
const AboutView = () => import('@/views/AboutView.vue');

export const routes: Readonly<RouteRecordRaw[]> = [
    { path: '/', name: 'home', component: HomeView, meta: { layout: 'default', title: 'Home' } },
    { path: '/about', name: 'about', component: AboutView, meta: { layout: 'default', title: 'About' } },
    { path: '/skills', name: 'skills', component: HomeView, meta: { layout: 'default', title: 'Skill Set' } },
    { path: '/projects', name: 'projects', component: HomeView, meta: { layout: 'default', title: 'Projects' } },
    { path: '/misc', name: 'miscellaneous', component: HomeView, meta: { layout: 'default', title: 'Miscellaneous' } },
    { path: '/contact', name: 'contact', component: HomeView, meta: { layout: 'default', title: 'Contact Me' } },
    { path: '/cover-letter', name: 'hire', component: HomeView, meta: { layout: 'default', title: 'Hire Me' } },
    { path: '/aeneid', name: 'aeneid', component: HomeView, meta: { layout: 'hidden', title: 'AD ASTRA' } },
];
