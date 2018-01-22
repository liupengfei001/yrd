// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import axios from "axios"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from "../store/index"
import VueWechatTitle from 'vue-wechat-title'
import './assets/css/mint/my-mint.css';

fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueWechatTitle)
Vue.prototype.$http = axios

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.select()
  }
})
//Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
