import Vue from 'vue'
import App from './App.vue'
//注册三级联动--全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数：全局组件名字，第二个参数：哪一个组件的
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

import store from './store/index';

//引入MockServer.js  ----mock数据
import '@/mock/mockServer'
//测试连接
// import {reqCategoryList} from '@/api';
// reqCategoryList();

import router from '@/router';
new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册stroe
  store
}).$mount('#app')
