import { createWebHistory, type RouterOptions } from 'vue-router';

import fullRoutes from './routes';

export default { history: createWebHistory(), routes: fullRoutes } as RouterOptions;
