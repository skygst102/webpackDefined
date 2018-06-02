const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
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
                        // minimize: true,     //压缩css并合并形同样式
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
                limit: 10000            //图片小于时转换为base64;
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
