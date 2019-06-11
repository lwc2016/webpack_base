"use strict";
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: ["webpack-hot-middleware/client?noInfo=true&reload=true","./src/index.js"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.bundle.js",
        publicPath: "http://localhost:8080/"
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
        new webpack.HotModuleReplacementPlugin()
    ],
    // devServer: {
    //     contentBase: "./dist",
    //     hot: true
    // },
    mode: "development",
}