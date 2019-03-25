<template>
  <div class="login-container" v-if="showLogin">
    <div class="login flex-columu-center shadow-border">
      <image :src="imgHost && imgHost+'logo4.png'" mode="scaleToFill" lazy-load="false">
      </image>
      <p>欢迎来到前端部落！</p>
      <p>请点击登录继续使用小程序</p>
      <van-button type="info" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</van-button>
    </div>
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../utils/config'
  import {
    login
  } from '../utils/login'
  export default {
    config: {
      navigationBarTitleText: '登录'
    },
    data() {
      return {
        imgHost: imgUrl,
        showLogin:false
      }
    },
    onLoad() {
      wx.showToast({
        icon: 'loading', //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
      });
      if (wx.getStorageSync('openid')) {
        console.log(wx.getStorageInfoSync('openid'));
        wx.hideToast({
          success: (res => {
            console.log(res)
            wx.reLaunch({
              url: './home'
            });
          })
        });
      }else{
        wx.hideToast();
        this.showLogin = true;
      }
    },
    methods: {
      getUserInfo(e) {
        console.log(e);
        if (e.target.userInfo) {
          login().then(res => {
            this.$store.commit('setOpennId', res.data.code.openid);
            wx.setStorageSync('openid', res.data.code.openid);
            // this.$router.push({path:'home'})
            wx.reLaunch({
              url: './home'
            });
          })
        }
      }
    },
    watch: {

    },
    computed: {

    }
  }

</script>

<style lang="scss">
  .login-container {
    // background-image: url('http://pnrykw6xt.bkt.clouddn.com/keung/14.jpg');
    // background-repeat: no-repeat;
    // background-size: 100vw 100vh;
    width: 100%;
    height: 100vh;
    text-align: center;
    font-size: 30rpx;
    position: relative;

    .login {
      width: 90%;
      height: 400rpx;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      image {
        width: 110rpx;
        height: 100rpx;
        margin-bottom: 14rpx;
      }
    }

    .van-button {
      width: 200rpx;
      margin-top: 20rpx;
    }
  }

</style>
