"use strict";
// 文件指纹
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:8].css"
        })
    ],
    mode: "production"
}
