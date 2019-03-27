<template>
  <div class="special-container">
    <van-notice-bar left-icon="/static/imgs/notice.png" color="#1989fa"
      text="欢迎大家来到前端部落，这里集结了各种IT技术的前沿文章文献，希望可以帮到大家！" />
    <div class="special">
      <div class="cell-box">
        <image src="/static/imgs/mark.png" mode="widthFix" lazy-load="false">
        </image>
        <p>专题</p>
      </div>
      <div class="special-content" v-if="specialData.length>0">
        <scroll-view class="special-scroll" scroll-y scroll-with-animation @scroll="scrollBottom">
          <div @click="toDetails(item.link)" class="special-item" v-for="(item,cur) in specialData" :key="cur">
            <image :src="item.url" mode="scaleToFill" lazy-load>
            </image>
            <p>{{item.title}}</p>
          </div>
        </scroll-view>
      </div>
    </div>
    <van-popup :show="isPopupShow" custom-style="background:rgb(80, 77, 77);color:white;font-size:30rpx;height:100rpx;line-height:100rpx;text-align:center;" position="top" @close="onClose">
      暂无数据
    </van-popup>
  </div>
</template>

<script>
  import card from '@/components/card'
  import {
    imgUrl
  } from '../utils/config'
  export default {
    mpType: 'page',
    config: {
      navigationBarTitleText: '首页'
    },
    data() {
      return {
        userInfo: {},
        newVal: '',
        imgHost: imgUrl,
        specialData: [],
        isPopupShow:false
      }
    },
    onLoad() {

      this.$ajax.$Get({
        url: 'getSpecialData',
        loading: true
      }).then(res => {
        this.specialData = res;
        // wx.hideLoading();
        console.log(res)
      });
    },
    components: {
      card
    },
    watch: {

    },
    methods: {
      onClose(e){
        console.log(e);
        this.isPopupShow = false;
      },
      toDetails(link) {
        let path = './specialView';
        if (link == 's2') {
          path = './reactView';
        }
        if(link.includes('s3')) {
          this.isPopupShow = true;
          return;
        }
        this.$router.push({
          path,
          query: {
            to: link
          }
        });
      },
    },

    created() {

    }
  }

</script>

<style scoped lang="scss">
  .special-container {
    padding-bottom: 20rpx;

    .special {
      width: 100%;
      padding: 0 20rpx;

      .cell-box {
        width: 100%;
        height: 90rpx;
        // border-bottom: 1rpx solid rgb(245, 243, 243);
        display: flex;
        align-items: center;

        image {
          width: 40rpx;
          height: 40rpx;
        }

        p {
          margin-left: 8rpx;
          font-size: 26rpx;
          font-weight: 600;
        }
      }

      .special-content {
        width: 100%;
        box-shadow: 1rpx 1rpx 3rpx 2rpx #e7e6e6;
        border-radius: 30rpx;
        // margin-top:20rpx;
        padding: 20rpx 20rpx 0 20rpx;

        .special-scroll {}

        .special-item {
          width: 100%;
          text-align: center;
          // margin-right:2%;
          margin-bottom: 20rpx;
        }

        // .special-item:nth-child(3n+3){
        //   margin-right:0;
        // }
        image {
          width: 100%;
          height: 340rpx;
          margin-bottom: 10rpx;
          border-radius: 10rpx;
        }

        p {
          font-size: 26rpx;
        }
      }
    }
  }

</style>
