"use strict";
// 多页面打包通用解决方案
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

const setMNP = ()=>{
    let entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
    let entry = {};
    let htmlWebpackPlugin = [];
    entryFiles.forEach(file => {
        let match = file.match(/src\/(.*?)\/index.js/);
        console.log(match);
        let fileName = match && match[1];
        entry[fileName] = file;
        htmlWebpackPlugin.push(
            new HtmlWebpackPlugin({
                template: `./src/${fileName}/index.html`,
                chunks: [fileName],
                filename: `${fileName}.html`
            })
        )
    });
    console.log(entry);
    return {entry, htmlWebpackPlugin};
};

const {entry, htmlWebpackPlugin} = setMNP();

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]_[chunkhash:8].js"
    },
    module: {
        rules: [
            {test: /.js$/, use: "babel-loader"},
            {test: /.css$/, use: [MiniCssExtractPlugin.loader, "css-loader", {
                loader: "postcss-loader",
                options: {
                    plugins: [require("autoprefixer")]
                }
            }]},
            {test: /.less$/, use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader",{
                loader: "postcss-loader",
                options: {
                    plugins: [require("autoprefixer")]
                }
            }]},
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
        ...htmlWebpackPlugin
    ],
    mode: "production"
}
