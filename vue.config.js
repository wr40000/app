const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  //关闭eslint
  devServer: {
    proxy: {
      "/api": {
        // 只对请求路由以/api 开头的请求进行代理转发
        target: "http://gmall-h5-api.atguigu.cn", // 转发的目标 url
        ws: true,
        changeOrigin: true, // 支持跨域
      },
      "/Terraria": {
        // 只对请求路由以/Terraria 开头的请求进行代理转发
        target: "http://127.0.0.1:8001/Terraria/", // 转发的目标 url
        ws: true,
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          "^/Terraria": "", //重写接口,后面可以使重写的新路径，一般不做更改
        },
      },
    },
  },
});
