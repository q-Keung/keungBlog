<template>
  <div>
    <div class="css-filter">
      <div class="filter-title">滤镜效果:{{cssFilter}}</div>
      <div class="filter-avatar">
        <image :class="{'f-grayscale':isGrayscale,'f-blur':isBlur,'f-sepia':isSepia,'f-hue-rotate':isHueRotate}" :src="fAvatar" mode="scaleToFill" lazy-load></image>
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
  </div>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: 'css滤镜效果'
    },
    data(){
        return{
            fAvatar:require('../../../static/imgs/sr14.jpg'),
            isBlur:false,
            isGrayscale:false,
            isSepia:false,
            isHueRotate:false,
            cssFilter:'正常'
        }
    },
    methods:{
        switchFilter(data){
            let _ = data;
            switch(_){
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
        }
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
        height:400rpx;
        image{
            width:100%;
            height:100%;
        }
    }
    .filter-choice{
        width:100%;
        height:100rpx;
        .van-button{
            margin-right:10rpx;
        }
        button:nth-last-child(1){
            margin-right:0;
        }
    }
    .filter-default{
        width:100%;
        padding:0 15rpx;
    }


    /*filter*/
    /*还原*/
    .f-default{
        -webkit-filter: grayscale(0);
        filter:grayscale(0);
    }
    /*高斯模糊*/
    .f-blur{
        -webkit-filter:blur(10rpx);
        filter: blur(10rpx);
    }
    /*灰色图像*/
    .f-grayscale{
        -webkit-filter: grayscale(100%);
        filter:grayscale(100%);
    }
    /*深褐效果*/
    .f-sepia{
        -webkit-filter: sepia(100%); /* Chrome, Safari, Opera */
        filter: sepia(100%);
    }
    /*色相旋转*/
    .f-hue-rotate{
        -webkit-filter: hue-rotate(90deg); /* Chrome, Safari, Opera */
        filter: hue-rotate(90deg);
    }
  }

</style>
