// const path = require("path");
const entry = require("./entry");
const loader = require("./loader");
const plugins = require("./plugins");
const devServer = require("./devServer");
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path:__dirname+ "../dist", //输出路径，要用绝对路径
        filename: "js/[name]/[name].[chunkhash:8].js",
        publicPath: "../dist" //html中资源路径想对路径
    },
    module: loader,
    plugins: plugins,
    devServer:devServer
};
