const config = require("./webpack.config.js");
const webpack = require("webpack");
const entry = config.entry;
for(let key in entry){
    entry[key] = ["webpack-hot-middleware/client?noInfo=true&reload=true", entry[key]];
}
Object.assign(config, {
    entry: entry,
    output: Object.assign(config.output, {publicPath: "/"}),
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

console.log(config);

module.exports = config;