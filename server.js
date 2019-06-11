const koa = require("koa");
const staticMiddlware = require("koa-static");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const webpackComplier = webpack(webpackConfig);
const koaWebpackMiddleware = require("./middlewares/koaWebpackMiddleware.js");
const kotHotMiddleware = require("./middlewares/koaHotMiddleware.js");
const app = new koa();

app.use(staticMiddlware("./dist"));
app.use(koaWebpackMiddleware(webpackComplier, {
    publicPath: "http://localhost:8080"
}));
app.use(kotHotMiddleware(webpackComplier));


app.listen(8080, ()=>{
    console.log("Server is running in http://localhost:8080");
});