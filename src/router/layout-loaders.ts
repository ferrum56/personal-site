export type LayoutName = 'default' | 'hidden';
export const layoutLoaders = {
    default: () => import('@/layouts/DefaultLayout.vue'),
    hidden: () => import('@/layouts/HiddenLayout.vue'),
};
