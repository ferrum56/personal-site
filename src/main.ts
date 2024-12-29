import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import App from './App.vue';
import routerOptions from '@/router';
import './style.css';

const router = createRouter(routerOptions);

createApp(App).use(router).mount('#app');
