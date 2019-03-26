<template>
  <div>
    <div class="rate-bottom">
      <van-rate :value="rateVal" size="23" count="6" icon="like" void-icon="like-o" color="#1989fa" void-color="#b4d4f5"
        @change="onChange" @click="stopRate" :readonly="isRate" />
    </div>
    <van-notify id="custom-selector" />
  </div>
</template>

<script>
  import Notify from 'vant-weapp/dist/notify/notify';

  function rateFn(text) {
    Notify({
      text,
      duration: 1000,
      selector: '#custom-selector',
      backgroundColor: '#1989fa'
    });
  }
  export default {
    props: {
      rateVal: {
        type: Number,
        defalut: 0
      }
    },
    data() {
      return {
        isRate: false,
        firstRate: false,
      }
    },
    methods: {
      stopRate() {
        let _text = '小可爱您已经评过分了哟~';
        if (!this.firstRate) {
          this.firstRate = true;
        } else {
          rateFn(_text);
          return;
        }
      },
      onChange(rate) {
        console.log(rate)
        let _text = '谢谢小可爱的评分哦~',
          rateV = rate.mp.detail;
        if (rateV) {
          rateFn(_text);
          this.isRate = true;
          this.rateVal = rateV;
          this.$store.commit('setRate', rateV);
        }
      }
    },

  }

</script>

<style lang="scss">
  .rate-bottom {
    width: 100%;
    height: 70rpx;
    padding: 0 15rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    border-top: 1rpx solid rgb(236, 233, 233);
    background:white;
    .van-rate {
      line-height: 1;
      padding-top: 2rpx;
    }
  }

</style>
