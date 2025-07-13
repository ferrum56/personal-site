/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, type PluginOption, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        svgLoader(),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        }) as PluginOption,
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
} as UserConfig);
