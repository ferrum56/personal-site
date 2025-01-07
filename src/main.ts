import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

import App from './App.vue';
import routerOptions from '@/router';
import './style.css';
import './font.css';

const router = createRouter(routerOptions);
router.afterEach((to) => (document.title = `${to.name.toUpperCase()} | ALAN ZHENG`));

createApp(App).use(router).use(Quasar, { plugins: {} }).mount('#app');
