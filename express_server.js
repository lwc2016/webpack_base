const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.devExpressServer.js");
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
// 配置静态资源文件
app.use(express.static("./dist"));
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.listen(60801, ()=>{
    console.log("Server is running in http://localhost:60801");
});