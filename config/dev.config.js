const path = require("path");
const entry = require("./entry");
const loader = require("./loader");
const plugins = require("./plugins");
const devServer = require("./devServer");
const output = require("./output");
module.exports = {
    mode: 'development',
    entry: entry,
    output: output,
    module: loader,
    plugins: plugins,
    devServer:devServer,
    devtool: 'source-map'
};



