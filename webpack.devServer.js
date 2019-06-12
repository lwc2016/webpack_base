"use strcit";
// webpack-dev-server, 相关配置
const config = require("./webpack.config.js");
const webpack = require("webpack");
Object.assign(config, {
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0",
        port: 8080,
        hot: true
    },
    plugins: config.plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ])
});

module.exports = config;