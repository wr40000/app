const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
    '/api': { // 只对请求路由以/api 开头的请求进行代理转发
    target: 'http://gmall-h5-api.atguigu.cn', // 转发的目标 url
    ws: true,
    changeOrigin: true // 支持跨域
    }
    }
    },
    
})
