"use strict";
// webpack 基础配置文件
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
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {test: /.js$/, use: "babel-loader"},
            {test: /.css$/, use: ["style-loader", "css-loader"]},
            {test: /.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /.(png|jpg)$/, use: "file-loader"}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    mode: "development"
}
