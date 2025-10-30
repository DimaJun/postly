// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import tslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js, 'unused-imports': unusedImports },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
    },
    tslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    reactHooks.configs.flat.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    {
        rules: {
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'unused-imports/no-unused-imports': 'error',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/extensions': 'off',
            'no-shadow': 'off',
            'no-undef': 'off',
            'no-underscore-dangle': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/button-has-type': 'off',
            'keyword-spacing': 'warn',
            'no-param-reassign': 'off',
            'react/function-component-definition': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/alt-text': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/no-array-index-key': 'off',
            'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
            'react/no-unstable-nested-components': 'warn',
            'no-console': 'warn',
            'react-hooks/set-state-in-effect': 'off',
        },
    },
]);
