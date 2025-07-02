import type { DefineComponent } from 'vue';

interface VueComponentDefault {
    default: DefineComponent<unknown, unknown, unknown>;
}

export type LayoutName = 'default' | 'hidden';
export const layoutLoaders: Record<LayoutName, () => Promise<VueComponentDefault>> = {
    default: () => import('@/layouts/DefaultLayout.vue'),
    hidden: () => import('@/layouts/HiddenLayout.vue'),
};
