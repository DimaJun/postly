import ReactRefreshTypescript from 'react-refresh-typescript';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDev: boolean) {
    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypescript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    return [svgLoader, tsLoader, cssLoader];
}
