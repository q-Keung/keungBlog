<template>
  <div class="special-container">
    <van-notice-bar left-icon="/static/imgs/notice.png" color="#1989fa" text="欢迎大家来到前端部落，这里集结了各种IT技术的前沿文章文献，希望可以帮到大家！" />
    <div class="special">
      <div class="cell-box">
        <image src="/static/imgs/mark.png" mode="widthFix" lazy-load="false">
        </image>
        <p>专题</p>
      </div>
      <div class="special-content" v-if="specialData.length>0">
        <scroll-view class="special-scroll" scroll-y scroll-with-animation @scroll="scrollBottom">
          <div class="special-item" v-for="(item,cur) in specialData" :key="cur">
            <image :src="item.url" mode="scaleToFill" lazy-load="false">
            </image>
            <p>{{item.title}}</p>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
  import card from '@/components/card'
  import {imgUrl} from '../utils/config'
  export default {
    mpType: 'page',
    config: {
      navigationBarTitleText: '首页'
    },
    data() {
      return {
        userInfo: {},
        newVal: '',
        imgHost:imgUrl,
        specialData:[],
      }
    },
    onLoad() {
      wx.showLoading({
        title: '加载中...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
      });
      this.$http.get('getSpecialData').then(res=>{
        this.specialData = res.specialData;
        wx.hideLoading();
        console.log(res);
      })
      console.log(this.globalData);
      console.log(process.env.NODE_ENV);
      // this.$http;
    },
    components: {
      card
    },
    watch: {
  
    },
    methods: {
      bindViewTap() {
        // const url = '/packageA/logs'
        // this.$router.push({
        //   path: url,
        //   query: {
        //     id: 1
        //   }
        // });
      },
      clickHandle(msg, ev) {
        // console.log('clickHandle:', msg, ev)
      }
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
        border-radius:30rpx;
        // margin-top:20rpx;
        padding: 20rpx 20rpx 0 20rpx;
        .special-scroll{
        }
        .special-item{
          display: inline-block;
          width:32%;
          text-align:center;
          margin-right:2%;
          margin-bottom:20rpx;
        }
        .special-item:nth-child(3n+3){
          margin-right:0;
        }
        image{
          width:100%;
          height:260rpx;
          margin-bottom: 10rpx;
          border-radius:10rpx;
        }
        p{
          font-size:26rpx;
        }
      }
    }
  }
</style>
