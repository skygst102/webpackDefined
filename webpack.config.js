//https://www.webpackjs.com
const path = require("path");
const entry = require("./config/entry");
const loader = require("./config/loader");
const plugins = require("./config/plugins");
const devServer = require("./config/devServer");
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, "dist"), //输出路径，要用绝对路径
        filename: "js/[name]/[name].[chunkhash:8].js",
        publicPath: "" //html中资源路径想对路径
    },
    module: loader,
    plugins: plugins,
    devServer:devServer, 
};
