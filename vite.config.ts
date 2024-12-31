import { fileURLToPath, URL } from 'node:url';

/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({ template: { transformAssetUrls } }),
        quasar(),
    ],
    define: {
        __PROJECT_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        coverage: {
            provider: 'istanbul',
        },
    },
});
