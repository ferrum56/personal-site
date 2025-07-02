import { createRouter, createWebHistory } from 'vue-router';
import { useTitle } from '@vueuse/core';

import { routes } from './routes';
import { layoutLoaders } from './layout-loaders';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
router.beforeEach(async (to, _) => {
    if (!to.meta.layoutComponent) {
        const layoutLoader = layoutLoaders[to.meta.layout ?? 'default'];
        if (layoutLoader) {
            to.meta.layoutComponent = (await layoutLoader()).default;
        } else {
            console.warn('Failed to load layout, please report this issue');
            to.meta.layoutComponent = (await layoutLoaders.default()).default;
        }
    }
});
router.afterEach((to) => {
    if (to.meta.title) {
        useTitle(to.meta.title, { titleTemplate: '%s | Alan Zheng' });
    }
});

export { router };
