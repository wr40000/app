//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


//使用插件
Vue.use(VueRouter);



//console.log(VueRouter.prototype)

//1) 问题:编程式路由跳转到当前路径且参数没有变化时会抛出 NavigationDuplicated 错误
//2) 原因分析:vue-router3.1.0之后, 引入了push()的promise的语法, 如果没有通过参数指定回调
//函数就返回一个 promise 来指定成功/失败的回调, 且内部会判断如果要跳转的路径和参数
//都没有变化, 会抛出一个失败的 promise

// 缓存原型上的 push 函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的 push 指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
 // 判断如果没有指定回调函数, 通过 call 调用源函数并使用 catch 来处理错误
 if (onComplete===undefined && onAbort===undefined) {
 return originPush.call(this, location, onComplete, onAbort).catch(() => {})
 } else { // 如果有指定任意回调函数, 通过 call 调用源 push 函数处理
 originPush.call(this, location, onComplete, onAbort)
 }
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
 if (onComplete===undefined && onAbort===undefined) {
 return originReplace.call(this, location, onComplete, onAbort).catch(() =>
{})
 } else {
 originReplace.call(this, location, onComplete, onAbort)
 }
}



export default new VueRouter({
    // routes:routes
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
      }
})