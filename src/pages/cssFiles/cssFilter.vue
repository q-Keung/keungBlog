<template>
  <div>
    <van-transition :show="tabActive == 0" :duration="duration" name="slide-left">
      <div class="css-filter" v-if="tabActive == 0">
        <div class="filter-title">滤镜效果:{{cssFilter}}</div>
        <div class="filter-avatar">
          <image :class="{'f-grayscale':isGrayscale,'f-blur':isBlur,'f-sepia':isSepia,'f-hue-rotate':isHueRotate}"
            :src="fAvatar" mode="scaleToFill" lazy-load></image>
        </div>

        <div class="filter-choice flex-center">
          <van-button type="primary" @click="switchFilter('blur')">高斯模糊</van-button>
          <van-button type="info" @click="switchFilter('grayscale')">灰度图像</van-button>
          <van-button type="warning" @click="switchFilter('sepia')">深褐转换</van-button>
          <van-button type="danger" @click="switchFilter('rotate')">色相旋转</van-button>
        </div>
        <div class="filter-default">
          <van-button size="large" type="default" @click="switchFilter('1')">还原</van-button>
        </div>
      </div>
    </van-transition>
    <van-transition :show="tabActive == 1" name="slide-left">
      <div class="filter-set" v-if="tabActive == 1">
        <div class="f-set">
          <image :style="{filter:contrast+invert+saturate}" :src="fSetImg" mode="scaleToFill" lazy-load="false"></image>
        </div>
        <div class="stepper-box">
          <span>对比度</span>
          <van-stepper disable-input min="0" max="100" step="10" :value="contrastVal" @change="contrastChange" />
        </div>
        <div class="stepper-box">
          <span>图像反转</span>
          <van-stepper disable-input min="0" max="100" step="10" :value="invertVal" @change="invertChange" />
        </div>
        <div class="stepper-box">
          <span>饱和度</span>
          <van-stepper disable-input min="0" max="100" step="10" :value="saturateVal" @change="saturateChange" />
        </div>
      </div>
    </van-transition>
    <van-tabbar :active="tabActive" @change="tabChange">
      <van-tabbar-item icon="photo">滤镜</van-tabbar-item>
      <van-tabbar-item icon="setting">调整</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: 'css滤镜效果'
    },
    data() {
      return {
        fAvatar: require('../../../static/imgs/sr14.jpg'),
        fSetImg: require('../../../static/imgs/sr21.jpg'),
        isBlur: false,
        isGrayscale: false,
        isSepia: false,
        isHueRotate: false,
        cssFilter: '正常',
        //tabbar
        tabActive: 1,
        duration: 600,
        //步进组件
        contrastVal:50,
        invertVal:0,
        saturateVal:50,
        gray:``,
        contrast:``,
        invert:``,
        saturate:``
      }
    },
    methods: {
      switchFilter(data) {
        let _ = data;
        switch (_) {
          case 'blur':
            this.isGrayscale = this.isSepia = this.isHueRotate = false;
            this.isBlur = !this.isBlur;
            this.cssFilter = '高斯模糊'
            break;
          case 'grayscale':
            this.isBlur = this.isSepia = this.isHueRotate = false;
            this.isGrayscale = !this.isGrayscale;
            this.cssFilter = '灰色图像'
            break;
          case 'sepia':
            this.isBlur = this.isGrayscale = this.isHueRotate = false;
            this.isSepia = !this.isSepia;
            this.cssFilter = '深褐转换'
            break;
          case 'rotate':
            this.isBlur = this.isGrayscale = this.isSepia = false;
            this.isHueRotate = !this.isHueRotate;
            this.cssFilter = '色相旋转'
            break;
          default:
            this.isBlur = this.isGrayscale = this.isSepia = this.isHueRotate = false;
        }
        // this.isBlur = !this.isBlur;
      },
      tabChange({
        mp
      }) {
        console.log(mp.detail);
        this.tabActive = mp.detail
      },
      contrastChange({mp}){
        this.contrastVal = mp.detail;
        this.contrast = `contrast(${mp.detail}%)`
      },
      invertChange({mp}){
        this.invertVal = mp.detail;
        this.invert = `invert(${mp.detail}%)`
      },
      saturateChange({mp}){
        this.saturateVal = mp.detail;
        this.saturate = `saturate(${mp.detail}%)`
      },
    }
  }

</script>

<style lang="scss">
  .css-filter {
    width: 100%;

    // padding:10rpx;
    .filter-title {
      width: 100%;
      height: 60rpx;
      font-size: 28rpx;
      font-weight: 600;
      line-height: 60rpx;
      text-align: center;
      background: rgb(235, 234, 219);
    }

    .filter-avatar {
      width: 100%;
      height: 400rpx;
    }

    .filter-choice {
      width: 100%;
      height: 100rpx;

      .van-button {
        margin-right: 10rpx;
      }

      button:nth-last-child(1) {
        margin-right: 0;
      }
    }

    .filter-default {
      width: 100%;
      padding: 0 15rpx;
    }


    /*filter*/
    /*还原*/
    .f-default {
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }

    /*高斯模糊*/
    .f-blur {
      -webkit-filter: blur(10rpx);
      filter: blur(10rpx);
    }

    /*灰色图像*/
    .f-grayscale {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    /*深褐效果*/
    .f-sepia {
      -webkit-filter: sepia(100%);
      /* Chrome, Safari, Opera */
      filter: sepia(100%);
    }

    /*色相旋转*/
    .f-hue-rotate {
      -webkit-filter: hue-rotate(90deg);
      /* Chrome, Safari, Opera */
      filter: hue-rotate(90deg);
    }
  }

  image {
    width: 100%;
    height: 100%;
  }

  .filter-set {
    width: 100%;

    .f-set {
      width: 100%;
      height: 400rpx;
    }

    .stepper-box {
      width: 100%;
      padding: 15rpx;
      font-size: 26rpx;
      border-bottom:1rpx solid rgb(243, 238, 238);
      .custom-button {
        width:25px;
        height:20px;
        border-radius:12rpx;
        background-color:#fff;
      }

      .van-stepper {
        margin-top: 15rpx;
      }
    }
  }

</style>
