import type { StorybookConfig } from '@storybook/react-webpack5';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from '../build/buildLoaders';
import { buildPlugins } from '../build/buildPlugins';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config.resolve.extensions.push('.ts', '.tsx', '.js');
        config.resolve.modules.push(paths.src, 'node_modules');
        config.resolve.preferAbsolute = true;
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': paths.src,
        };
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /\.svg$/i,
                };
            }
            return rule;
        });
        config.module.rules.push(...buildLoaders(true));
        config.plugins.push(...buildPlugins(true));

        return config;
    },
};
export default config;
