// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';

export default tseslint.config(
    {
        env: {
            node: true,
        },
    },
    {
        files: ['**/*.{js,ts,vue}'],
    },
    {
        ignores: ['node_modules/', 'dist/', '.yarn/', 'coverage/', '**/*.mjs', '**/*.cjs', '**/*.config.ts', '**/*.d.ts'],
    },
    {
        languageOptions: {
            globals: {
                __PROJECT_VERSION__: 'readonly',
                __EO2024__: 'readonly',
            },
        },
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig,
    ...pluginVue.configs["flat/recommended"],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        rules: {
            "vue/first-attribute-linebreak": "off",
            "vue/html-closing-bracket-newline": ["error", {
                "singleline": "never",
                "multiline": "never",
                "selfClosingTag": {
                    "singleline": "never",
                    "multiline": "never",
                },
            }],
            "vue/html-indent": ["error", 4, {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": [],
            }],
            "vue/html-self-closing": ["error", {
                "html": {
                    "void": "always",
                    "normal": "always",
                    "component": "always",
                },
                "svg": "always",
                "math": "always",
            }],
            "vue/max-attributes-per-line": "off",
            "vue/multiline-html-element-content-newline": "off",
            "vue/singleline-html-element-content-newline": "off",
            "vue/component-tags-order": ["error", {
                "order": ["script", "template", "style"],
            }],
        },
    },
    {
        rules: {
            "no-unused-private-class-members": "warn",
            "no-empty": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
    {
        files: ['**/*.test.ts'],
        rules: {
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
);
