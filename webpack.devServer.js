const config = require("./webpack.config.js");
const webpack = require("webpack");

Object.assign(config, {
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0",
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;