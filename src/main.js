import Vue from 'vue'
import App from './App.vue'
//注册三级联动--全局组件 在入口文件注册过后，在任何组件中都可以使用
import TypeNav from '@/components/TypeNav'

import Carousel from '@/components/Carousel'

import Pagination from "@/components/Pagination/index"
//第一个参数：全局组件名字，第二个参数：哪一个组件的
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false

import store from './store/index';

//引入MockServer.js  ----mock数据
import '@/mock/mockServer'

import 'font-awesome/css/font-awesome.min.css';
 
import "swiper/css/swiper.css";

import router from '@/router';


// import 'view-design/dist/styles/iview.css';
import ViewUI from 'view-design';
Vue.use(ViewUI);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library   faUserSecret */
library.add(fas)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
 
  //注册路由
  router,
  //注册stroe
  store
}).$mount('#app')
