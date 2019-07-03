const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            './src/index.js',
            './src/css/styles.css',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/index.html`,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};
