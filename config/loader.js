const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    rules: [
        {
            test: /\.js$/,
            exclude: "/node_modules/", //编译时排除文件夹
            use: { loader: "babel-loader" }
        },
        {
            test: /\.html$/,
            exclude: "/node_modules/",
            use: { loader: "html-loader" }
        },
        {
            test: /\.(css|sass|scss)$/,
            exclude: "/node_modules/",
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        minimize: process.env.NODE_ENV=='development'?false:true,     //压缩css并合并形同样式//cli set NODE_ENV=development&&
                        importLoaders: 2,
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true,
                        config: {
                            path: "postcss.config.js" // 这个得在项目根目录创建此文件
                        }
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: "url-loader",
            options: {
                limit: 1024,                           //图片小于时转换为base64;
                name:'[hash:8].[ext]',                 //name表示输出的文件名规则，如果不添加这个参数，输出的就是默认值：文件哈希。加上[path]表示输出文件的相对路径与当前文件相对路径相同，加上[name].[ext]则表示输出文件的名字和扩展名与当前相同
                outputPath:'assets/image/',            //publicPath表示打包文件中引用文件的路径前缀
                // publicPath:'output/',               //publicPath表示打包文件中引用文件的路径前缀,如 DNS 路径
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: "url-loader",
            options: {
                limit: 10000
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: "url-loader",
            options: {
                limit: 10000
            }
        }
    ]
};
