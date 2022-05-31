const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        path: path.resolve(__dirname, '../main.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        host: 'localhost',
        hot: true,
        port: 9001,
        open: 'Google Chrome'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|mjs)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                require.resolve('@babel/plugin-transform-flow-strip-types')
                            ]
                        }
                    }
                ],
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                    
                ]
            }
        ]
    },
    resolve: {
        alias: {
            business: path.resolve(__dirname, '../src/business'),
            business: path.resolve(__dirname, '../src/business'),
            components: path.resolve(__dirname, '../src/components'),
            react: path.resolve(__dirname, '../react/packages/react'),
            'react-dom': path.resolve(__dirname, '../react/packages/react-dom'),
            shared: path.resolve(__dirname, '../react/packages/shared'),
            scheduler: path.resolve(__dirname, '../react/packages/scheduler'),
            'react-reconciler': path.resolve(
                __dirname,
                '../react/packages/react-reconciler'
            )
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new Webpack.DefinePlugin({
            __DEV__: true,
            __PROFILE__: true,
            __UMD__: true,
            __EXPERIMENTAL__: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ]
}