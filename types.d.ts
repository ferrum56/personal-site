import 'vue-router';
import type { Component } from 'vue';

import type { LayoutName } from '@/router/layout-loaders';

declare module 'vue-router' {
    interface RouteMeta {
        title?: string;
        layout?: LayoutName;
        layoutComponent?: Component;
    }
}
