import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';
import { capitalize } from '@/utils/string-util';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
router.afterEach((to) => {
    if (typeof to.name === 'string') {
        document.title = `${capitalize(to.name)} | Alan Zheng`;
    }
});

export { router };
