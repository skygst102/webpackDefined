const path = require("path");
module.exports={
    path:path.resolve(__dirname,'../dist'), //输出路径，要用绝对路径
    filename: "assets/js/[name]/[name].[chunkhash:8].js",
    publicPath: "../dist/" //html中资源路径想对路径
}
