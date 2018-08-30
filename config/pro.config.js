const path = require("path");
const entry = require("./entry");
const loader = require("./loader");
const plugins = require("./plugins");
const devServer = require("./devServer");
module.exports = {
    mode: 'production',
    entry: entry,
    output: output,
    module: loader,
    plugins: plugins,
};
