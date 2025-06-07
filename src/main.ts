import { createApp } from 'vue';

import App from './App.vue';
import { router } from '@/router';
import './style.css';
import './font.css';

createApp(App).use(router).mount('#app');
