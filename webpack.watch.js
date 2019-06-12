"use strict";
// webpack，监听文件变化配置
const config = require("./webpack.config.js");
Object.assign(config, {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    }
});
module.exports = config;