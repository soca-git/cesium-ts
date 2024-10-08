const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app.ts'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        sourcePrefix: ''
    },
    resolve: {
        fallback: { "https": false, "zlib": false, "http": false, "url": false },
        mainFiles: ['app', 'Cesium'],
        extensions: ['.ts', '.js'],
        alias: {
            components: path.resolve(__dirname, "src/components/index"),
            state: path.resolve(__dirname, "src/state/index"),
            functions: path.resolve(__dirname, "src/functions/index"),
            wrappers: path.resolve(__dirname, "src/wrappers/index"),
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: ['url-loader']
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app.html'
        }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopyWebpackPlugin({
            patterns: [
                { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
                { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
                { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
                { from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }
            ]
        }),
        new webpack.DefinePlugin({
            CESIUM_BASE_URL: JSON.stringify('') // Define relative base path in cesium for loading assets
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map'
};
