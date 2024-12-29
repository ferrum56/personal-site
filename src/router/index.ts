import { createWebHistory, type RouterOptions } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

export default {
    history: createWebHistory(),
    routes: [{ path: '/', component: HomeView }],
} as RouterOptions;
