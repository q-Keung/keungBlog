<template>
  <div>
    <div class="font_wrap">
      <div class="zjtdCss">
        <span class="zjtd" :animation="animationData">{{z}}</span>
        <span class="zjtd" :animation="animationData">{{j}}</span>
        <span class="zjtd" :animation="animationData">{{t}}</span>
        <span class="zjtd" :animation="animationData">{{d}}</span>
        <!-- <text>{{zjtd}}</text> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    config: {
      navigationBarTitleText: '字节跳动'
    },
    data() {
      return {
        animationData: {},
        z: 'z',
        j: 'j',
        t: 't',
        d: 'd',
        zjtd: 'zjtd'
      }
    },
    onLoad() {
        this.zjtdObj();
        let dom = wx.createSelectorQuery().selectAll(".zjtd");
        console.log(dom);
    },
    methods: {
      zjtdObj() {
        let animation = wx.createAnimation({
            delay:500,
          duration: 500
        });
        this.animation = animation;
        // animation.translateY(-30).rotate(90).step();
        // this.animationData = animation.export();
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            animation.translateY(30).rotate(25).step();
            animation.translateY(-30).rotate(0).step();
            this.animationData = animation.export();
        },1000)
      }
    }
  }

</script>

<style lang="scss">
  .font_wrap {
    background: #f2f2f6;
    // position: relative;
    width: 100%;
    height: 100%;

    .zjtdCss {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 200rpx;
      height: 300rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      text,._span {
        font-size: 32rpx;
        font-weight: 600;
        word-spacing: 4rpx;
        letter-spacing: 4rpx;
      }
    }
  }

</style>
