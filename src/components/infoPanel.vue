<template>
  <div class="info-panel flex-column">
    <!-- <van-transition name="fade-up" v-show="isShow"> -->
    <van-tag size="large" color="#1989fa" text-color="#fff">{{infoData.status}}</van-tag>
    <div class="info-avatar info-mes">
      {{infoData.abstract}}
    </div>
    <div class="info-avatar info-mes">
      作品集：
    </div>
    <div class="info-works">
      <div class="works-box flex-column">
        <van-tag size="large" color="#1989fa" data-weburl="http://zkeung.top" text-color="#fff" @click="copyUrl">
          漫威后台管理系统</van-tag>
        <span>http://zkeung.top</span>
      </div>
      <div class="works-box flex-column">
        <van-tag size="large" color="#1989fa" data-weburl="http://ustbhuangyi.com/sell/#/goods" text-color="#fff"
          @click="copyUrl">门店售卖系统</van-tag>
        <span>http://ustbhuangyi.com/sell/#/goods</span>
      </div>
    </div>
    <!-- </van-transition> -->

    <div class="before-content">
      <div class="before-tips">
        tips:点击标题可复制地址哦！
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoPanel',
    props: ['infoData', ''],
    data() {
      return {}
    },
    methods: {
      copyUrl(e) {
        console.log(e);
        let dt = e.currentTarget.dataset.weburl;
        wx.setClipboardData({
          data: dt, //需要设置的内容,
          success: res => {
            wx.getClipboardData({
              success: res => {
                console.log(res);
              }
            });
          }
        });
      },

    }
  }

</script>

<style lang="scss">
  .info-panel {
    .van-tag {
      margin-bottom: 10rpx;
    }

    .info-mes {
      min-height: 70rpx;
      line-height: 70rpx;
      font-size: 28rpx;
      text-align: center;
      margin-bottom: 10rpx;
    }

    .info-works {
      width:100%;
      // padding: 15rpx;
      word-wrap: wrap;
      font-size: 28rpx;

      // color:#b4d4f5;
      .van-tag {
        margin: 0;
      }

      span {
        line-height: 1;
      }
    }
    .works-box,.info-avatar{
      border:1rpx solid rgb(241, 234, 234);
      width:100%;padding:20rpx 0;
    }
    .works-box {
      margin-bottom: 15rpx;

      .van-tag {
        margin-bottom: 10rpx;
      }
    }

    .before-content {
      width: 100%;
      margin-top: 40rpx;

      .before-tips {
        font-size: 24rpx;
        color: rgb(218, 214, 214);
        height: 40rpx;
        line-height: 40rpx;
        text-align: right;
        margin-bottom: 10rpx;
      }



    }
  }

</style>
