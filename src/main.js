import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import request from './utils/ajax'
import fly from './utils/fly'
import https from './utils/https'
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false

//在用户管理中会显示使用云能力的小程序的访问用户列表，默认以访问时间倒叙排列，访问时间的触发点是在小程序端调用 wx.cloud.init 方法，且其中的 traceUser 参数传值为 true。

Vue.prototype.$http = fly
// Vue.prototype.$ajax = https
const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()

Vue.prototype.globalData = getApp().globalData;
// Vue.prototype.$toPage = toPage;
Vue.prototype.$get = () => {
  return new Promise((resolve,reject)=>{
    request(url,'GET',data,resolve,reject,getApp().globalData)
  })
};
Vue.prototype.$post = () => {
  return new Promise((resolve,reject)=>{
    request(url,'POST',data,resolve,reject,getApp().globalData)
  })
};
