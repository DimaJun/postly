import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import TerserPlugin from 'terser-webpack-plugin';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { isDev, paths, mode } = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            filename: 'main.[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(isDev),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(paths),
        optimization: !isDev
            ? {
                  minimize: true,
                  minimizer: [new TerserPlugin()],
              }
            : undefined,
    };
}
