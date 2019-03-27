import Fly from "flyio/dist/npm/wx"
import store from '@/store'
import {
  login
} from './login'
const fly = new Fly()

//定义公共headers
fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
fly.config.timeout=10000;
//设置请求基地址
fly.config.baseURL="https://www.easy-mock.com/mock/5c7a7302a5251c27622e0ed7/vueVant/";

fly.interceptors.request.use(config => {
  wx.showLoading({
    title: '加载中...', //提示的内容,
    mask: true, //显示透明蒙层，防止触摸穿透,
  });
  if (!store.state.openid) {
    store.commit('setOpennId', wx.getStorageInfoSync('openid'));
    wx.getStorageInfoSync('openid');
    config.headers['token'] = store.state.openid;
  }
  if (!config.headers) {
    config.headers['token'] = store.state.token;
    // console.log(store.state.token)
  }
  return config;
})
fly.interceptors.response.use(response => {
  wx.hideLoading();
  if (response.status === 200) {
    response.data.data.isLoading = true;
    return response.data.data;
  } else {
    return response
  }
}, (err) => {
  //网络错误时执行
  console.log(err);
  return Promise.reject(err);
})
// console.log(store.state);
export default fly;
