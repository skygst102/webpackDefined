const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
module.exports=new CleanWebpackPlugin(
    ["dist","tt"],
    {
        root: path.resolve(__dirname),       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      true        　　　　　　　　　　//启用删除文件
    }
    )
