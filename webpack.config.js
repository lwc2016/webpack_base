"use strict";
const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {test: /.js$/, use: "babel-loader"},
            {test: /.css$/, use: ["style-loader", "css-loader"]},
            {test: /.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /.(png|jpg)$/, use: "file-loader"}
        ]
    },
    mode: "development",
}
