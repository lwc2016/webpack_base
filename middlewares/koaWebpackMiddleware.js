const webpackDevMiddleware = require("webpack-dev-middleware");

module.exports = (compiler, opts)=>{
    const middleware = webpackDevMiddleware(compiler, opts);
    return async (ctx, next)=>{
        await middleware(ctx.req, {
            end: (content)=>{
                ctx.body = content;
            },
            setHeader: (name, value)=>{
                ctx.set(name, value);
            }
        }, next);
    };
};