<template>
  <div>
    <div class="loading-box" v-if="!isloading">
      <van-loading color="#000" size="60rpx" />
    </div>
    <div class="home-container" v-if="isloading">
      <div class="search-box">
        <van-search background="#ffffff50" :value="value" show-action="show-action" cancel-class="cancel-class"
          shape="round" placeholder="请输入搜索关键词"></van-search>
      </div>
      <div class="swiper-box">
        <swiper :previous-margin="prevPx" :current="swiperCur" :next-margin="nextPx" circular="circular">
          <block v-for="(item,index) in sImgs" :key="index">
            <swiper-item>
              <div class="c-swiper">
                <image mode="scaleToFill" :src="item.src" lazy-load></image>
              </div>
            </swiper-item>
          </block>
        </swiper>
      </div>
      <!-- <van-button>测试</van-button> -->
      <!-- <div class="home-message">
      <div class="mes-box">
        <div class="swiper-logo">
          <image :src="imgHost && imgHost+'logo4.png'" mode="scaleToFill" lazy-load="true"></image>
        </div>
        <span class="message-title">认证用户</span>
      </div>
    </div> -->
      <div>
        <van-tabs swipeable="swipeable" animated="animated" color="#1989fa">
          <van-tab title="全部">
            <div class="tab-all" v-for="(item,key) in scrollData" :key="key">
              <div class="tab-title">
                <span>{{item.title}}</span>
                <van-button type="info" plain="plain" size="small" @tap="more(item.link)">查看更多</van-button>
              </div>
              <scroll-view class="scroll-body" scroll-x="scroll-x" scroll-with-animation="scroll-with-animation"
                @scroll="scrollMove">
                <div class="tab-content" v-for="(i,k) in item.items" :key="k" @click="todetails(i.to)">
                  <image :src="i.src" mode="scaleToFill" lazy-load></image>
                  <p>{{i.name}}</p>
                </div>
              </scroll-view>
            </div>
          </van-tab>
          <van-tab title="Javascript">
            <div class="tab-dl"></div>
          </van-tab>
          <van-tab title="Vue">Vue</van-tab>
          <van-tab title="React">React</van-tab>
        </van-tabs>
      </div>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
  import {
    imgUrl
  } from '../utils/config'
  import Https from '../utils/https'
  import Toast from 'vant-weapp/dist/toast/toast'
  const $https = new Https();
  // import {toPage} from '../utils/utils'
  let swiperImg = () => {
    let swiperArr = [];
    for (let i = 0; i < 4; i++) {
      swiperArr.push({
        src: `${imgUrl}q${i + 1}.png`
      })
    }
    return swiperArr;
  }
  export default {
    config: {
      navigationBarTitleText: '主页',
      usingComponents: {}
    },
    onLoad(options) {
      $https.$Get({
        url:'getScrollData'
      }).then(res=>{
        console.log(res)
        this.scrollData = res;
        this.isloading = true;
      })
      $https.$Get({
        url: 'indexData'
      }).then(res => {
        this.sImgs = res;
        // this.isloading = true;
      })

    },
    data() {
      return {
        swiperCur: 1,
        nextPx: '150rpx',
        prevPx: '150rpx',
        imgHost: imgUrl,
        sImgs: [],
        scrollData: [],
        value: '',
        isloading: false
      }
    },
    methods: {
      more(link) {
        console.log(link);
        Toast({
          message:'暂无更多~',
          duration:1000
        });
      },
      todetails(link){
        this.$router.push({path:'./details',query:{to:link}});
      }
    }

  }

</script>

<style lang="scss">
  /*loading position */

  .loading-box {
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  /*loading position */

  .home-container {
    background: #bdbdbd10;
    padding-bottom: 20rpx;
  }

  /*头部搜索框*/

  .search-box {
    width: 100%; // background:-webkit-linear-gradient(left right,rgb(30, 253, 142),rgb(37, 182, 240));
    // background: linear-gradient(to left right,rgb(30, 253, 142),rgb(37, 182, 240));
    background: #1989fa;

    ._van-search {
      width: 100%;
    }
  }

  .cancel-class {
    color: white;
  }

  .swiper-box {
    // height:300rpx;
    background: #bdbdbd20;
    padding: 20rpx 0;

    swiper-item {
      display: flex;
      align-items: center;
    }

    .c-swiper {
      width: 95%;
      height: 95%;
      box-sizing: border-box;
      margin: 0 auto; // display: flex;
      // justify-content: center;
    }
  }

  .home-message,
  .mes-box {
    display: flex;
    align-items: center;
  }

  .home-message {
    width: 100%;
    // height: 120rpx;
    // background: rebeccapurple;
    position: relative;
    justify-content: center;

    // margin-top: 30rpx;
    .mes-box {
      flex-direction: column;
      justify-content: space-between;
      padding: 10rpx 0;
      height: 156rpx;
      text-align: center;
    }

    .swiper-logo {
      // position: absolute;
      // top: -25%;
      // left: 50%;
      // transform: translate(-50%, 0);
      background: #fff;
      border-radius: 50%;
      box-shadow: 2rpx 3rpx 10rpx 3rpx rgb(121, 120, 120);
      display: flex;
      align-items: center;
      justify-content: center; // margin:auto;  
      width: 100rpx;
      height: 100rpx;

      image {
        border-radius: 50%;
      }
    }

    .message-title {
      // position: absolute;
      // bottom: 12rpx;
      // left: 50%;
      // transform: translate(-50%, 0);
      font-size: 20rpx;
      color: rgba(104, 102, 102, 0.333);
    }
  }

  .tab-all {
    width: 100%;
    background: rgb(245, 244, 244);
    box-sizing: border-box;
    margin-bottom: 30rpx;

    .tab-title {
      height: 80rpx;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22rpx;

      span {
        font-size: 30rpx;
      }
    }

    .scroll-body {
      width: 100%;
      white-space: nowrap; // padding-left: 20rpx;

      .tab-content:nth-child(1) {
        margin-left: 22rpx;
      }

      .tab-content {
        // width: 30%; // background: salmon;
        display: inline-block;
        margin-right: 22rpx;

        image {
          width:380rpx;
          height: 250rpx;
        }

        p {
          margin-bottom: 12rpx;
          font-size: 28rpx;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .tab-dl {
    width: 100%;
    height: 300rpx;
  }

</style>
