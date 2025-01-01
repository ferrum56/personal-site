/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';

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
        __EO2024__: JSON.stringify('The intelligent creatures on Sol-3 celebrate their planet\'s completion of' +
            'another orbital revolution around their star.'),
    },
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        coverage: {
            provider: 'istanbul',
        },
    },
});
