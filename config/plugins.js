const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports= [
    // new webpack.optimization.minimize({  //控制台信息控制，未调通
    //     compress: {
    //       warnings: false,
    //       drop_debugger: true,
    //       drop_console: true
    //     },
    //     sourceMap: true
    //   }),
    new HtmlWebpackPlugin({
        //页面模板
        template: "./src/pages/home/index.ejs",  //webpack默认为
        filename: "home/index.html",
        title: "index",
        favicon: '',
        cache: true,             //只有在内容变化时才生成一个新的文件
        chunks: ['home'],       //引入指定的文件
        inject: 'head',         //有4个值: true | 'head' | 'body' | false//引入js的位置
        minify: {
            removeComments: process.env.NODE_ENV=='development'? false:true, //去掉注释
            collapseWhitespace: process.env.NODE_ENV=='development'? false:true //true压缩为一行
        },
        // excludeChunks : ['jq','../js/common/jq.js'],      //很多chunks，排除不要加载的
        // inlineSource: '.(js|css)$' //把页面src引入文件的方式，改成用script标签嵌入的方式，减少http请求( 提高加载性能）
        // 所有参数都可被类似<%= htmlWebpackPlugin.options.title %> 在html页面中调用,文件类型需要时模板类型（例如：*.ejs）
    }),
    new MiniCssExtractPlugin({
        //单独打包css
        filename: "assets/css/[name]/[name].[chunkhash:8].css",
        chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(["dist"],{            //传入数组,指定生成文件时要清空的目录
        root: path.resolve(__dirname,'../'),     //根目录  /* 只能删除文件所在目录下的文件夹 */
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件//启用后文件夹无法删除
    }
    ),
    new webpack.ProvidePlugin({  //使用ProvidePlugin加载的模块在使用时将不再需要import和require进行引入，使用语法
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery"
    }),
    new webpack.LoaderOptionsPlugin({
        test: /\.js$/, // may apply this only for some modules
        options: {
            splitChunks: {
                chunks: "async",        //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
                minSize: 100,           //表示在压缩前的最小模块大小，默认为0；
                minChunks: 1,           //表示被引用次数，默认为1；
                maxAsyncRequests: 5,    //最大的按需(异步)加载次数，默认为1；
                maxInitialRequests: 3,  //最大的初始化加载次数，默认为1；
                automaticNameDelimiter: '~',
                name: true,             //拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,              //表示缓存的优先级；
                        reuseExistingChunk: true    //表示可以使用已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块。
                    }
                }
            }
        }
    })

]