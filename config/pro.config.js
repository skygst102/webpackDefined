const path = require("path");
const entry = require("./entry");
const loader = require("./loader");
const plugins = require("./plugins");
const devServer = require("./devServer");
const output = require("./output");
module.exports = {
    mode: 'production',
    entry: entry,
    output: output,
    module: loader,
    plugins: plugins,
};
