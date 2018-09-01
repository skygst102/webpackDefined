const path = require("path");
module.exports = {
    port: 8088,
    stats: "errors-only", //配置属性用来控制编译的时候shell上的输出内容（"errors-only","minimal"，"normal"，"verbose"）
    compress: true, //一切服务都启用gzip 压缩：
    overlay: true, //浏览器提示错误
    // proxy: { // 代理
    //     '/api': 'http://localhost:3000'
    // },
    contentBase: path.join(__dirname, "dist"),   //服务访问地址
    //host:'0.0.0.0',  //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问
    //historyApiFallback:{   //404页面
    //     rewrites:[
    //        {from:/./,to:'/404.html'}
    //     ]
    // },
    // quiet：false,     //（默认）当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
    // hot : true和inline : true     是webpack-dev-server的自动刷新和模块热替换机制
    colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
};
