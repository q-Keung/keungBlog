<template>
  <div>
    <div class="fly-container">
      <image :src="flyAvatar" mode="scaleToFill" lazy-load></image>

      <div class="fly-content">
        <p>下面分享的是在微信小程序中使用第三方插件请求数据，有需要的请到flyio官网文档查看：https://wendux.github.io</p>
        <van-button round type="default" size="small" @click="copyUrl('https://wendux.github.io')">复制链接</van-button>
      </div>
      <div class="fly-content">
        <h2>支持多平台:</h2>
        <p>目前Fly.js支持的平台包括：Node.js 、微信小程序 、Weex 、React Native 、Quick App 和浏览器，这些平台的 JavaScript
          运行时都是不同的。更多的平台正在持续添加中，请保持关注。</p>
      </div>

      <div class="fly-content justify">
        <ol>
          <li>Fly.js 是一个基于 promise 的，轻量且强大的Javascript http 网络库，它有如下特点：</li>
          <li>1.提供统一的 Promise API。</li>
          <li>2.浏览器环境下，轻量且非常轻量 。</li>
          <li>3.支持多种JavaScript 运行环境。</li>
          <li>4.支持请求／响应拦截器。</li>
          <li>5.自动转换 JSON 数据。</li>
          <li>6.支持切换底层 Http Engine，可轻松适配各种运行环境。</li>
          <li>7.浏览器端支持全局Ajax拦截 。</li>
          <li>8.H5页面内嵌到原生 APP 中时，支持将 http 请求转发到 Native。支持直接请求图片。</li>
        </ol>
      </div>

      <div class="fly-content justify">
        <h3>安装：</h3>
        <span>使用NPM</span>
      </div>

      <div class="fly-use">npm install flyio</div>

      <div class="fly-content">
        <span>具体使用：</span>
        <image :src="flyContentImg" mode="widthFix" lazy-load></image>
        <span>挂载到Vue实例上</span>
        <image :src="flyVue" mode="widthFix" lazy-load></image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: 'fly插件'
    },
    data() {
      return {
        flyAvatar: require("../../../static/imgs/fly.png"),
        flyContentImg:require("../../../static/imgs/fly-content.png"),
        flyVue:require("../../../static/imgs/fly-content1.png")
      }
    },
    methods:{
        copyUrl(url){
            wx.setClipboardData({
              data: url, //需要设置的内容,
              success: res => {
                  wx.getClipboardData();
              }
            });
        }
    }
  }

</script>

<style lang="scss">
  .fly-container {
    width: 100%;

    image {
      width: 100%;
      height: 300rpx;
    }
    .fly-content {
      width: 100%;
      padding: 15rpx 10rpx;
      background: rgb(39, 38, 38);
      font-size: 26rpx;
      color: white;
        .van-button{
            margin-top:10rpx;
        }
      ._h3 {
        font-size: 30rpx;
        font-weight: 600;
      }

      ._h2 {
        font-size: 30rpx;
      }

      ._span {
        padding-left: 26rpx;
      }
      image{
          width:100%;
          margin-top:10rpx;
      }
    }

    .fly-use {
      background: rgb(158, 156, 156);
      color: rgb(243, 239, 235);
      height: 80rpx;
      line-height: 80rpx;
      padding-left: 30rpx;
      font-size: 26rpx;
    }
  }

</style>
