const path = require("path");
const entry = require("./entry");
const loader = require("./loader");
const plugins = require("./plugins");
const devServer = require("./devServer");
const output = require("./output");
var config =  {
    mode: 'development',
    entry: entry,
    output: output,
    module: loader,
    plugins: plugins,
    devServer:devServer,
    devtool: 'source-map'
};
module.exports = (env, argv) => {
//    console.log(argv.mode)
process.env.NODE_ENV=argv.mode
    return config;
  };



