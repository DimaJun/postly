import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins(isDev: boolean) {
    const isProd = !isDev;

    const plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshPlugin({
                overlay: false,
            })
        );
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );
    }

    return plugins;
}
