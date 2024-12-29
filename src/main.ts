import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

import App from './App.vue';
import routerOptions from '@/router';
import './style.css';

const router = createRouter(routerOptions);
createApp(App).use(router).use(Quasar, { plugins: {} }).mount('#app');
