// See https://router.vuejs.org/guide/advanced/lazy-loading.html
const HomeView = () => import('@/views/HomeView.vue');

const fullRoutes = [{ path: '/', name: 'home', component: HomeView }];

export const navRoutes = fullRoutes.map(({ path, name }) => ({ path, name }));
export default fullRoutes;
