// See https://router.vuejs.org/guide/advanced/lazy-loading.html
const HomeView = () => import('@/views/HomeView.vue');

const fullRoutes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: HomeView },
    { path: '/skills', name: 'skills', component: HomeView },
    { path: '/projects', name: 'projects', component: HomeView },
    { path: '/misc', name: 'misc', component: HomeView },
    { path: '/contact', name: 'contact', component: HomeView },
];

export const navRoutes = fullRoutes.map(({ path, name }) => ({
    value: name,
    to: path,
    label: name,
}));
export default fullRoutes;
