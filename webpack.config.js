
const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: ['babel-polyfill', 'src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve( 'public'),
    },

    devtool: '#cheap-module-source-map',
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env'],
                    plugins: ['babel-plugin-transform-object-rest-spread', 'transform-class-properties'],
                },
            },
        },
         {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader'],
                }),
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                use: 'url-loader?limit=100000&name=[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        name: '/static/fonts/[name].[ext]',
                    },
                }],
            },
        ],
    },
    devServer: {
        contentBase: './public',
        hot: true,
        port: 5000,
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/style.css',
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: 'src/index.html',

        }),
    ],
};

module.exports = webpackConfig;