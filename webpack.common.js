"use strict";
// 提取公共模块
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]_[chunkhash:8].js"
    },
    module: {
        rules: [
            {test: /.js$/, use: "babel-loader"},
            {test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
            {test: /.less$/, use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]},
            {test: /.(png|jpg)$/, use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash:8].[ext]"
                    }
                }
            ]}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:8].css"
        }),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"],
            inject: true
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: "react",
                    entry: "https://cdn.bootcss.com/react/16.8.6/umd/react.production.min.js",
                    global: "React"
                },
                {
                    module: "react-dom",
                    entry: "https://cdn.bootcss.com/react-dom/16.8.6/umd/react-dom.production.min.js",
                    global: "ReactDOM"
                }
            ]
        })
    ],
    mode: "production",
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    }
}
