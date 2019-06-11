const config = require("./webpack.config.js");

// 监听文件变化
Object.assign(config, {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    }
});

module.exports = config;