import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import router from '@/router';
new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
