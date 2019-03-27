<template>
  <div class="my-container">
    <div class="my-header">
      <image :src="imgHost && imgHost+'q10.jpg'" mode="scaleToFill" lazy-load="false">
      </image>
      <div class="user-info">
        <div class="info-avatar">
          <img :src="infoData.avatar" alt="">
        </div>
        <div class="info-nickname">
          <!-- <open-data type="userNickName" lang="zh_CN"></open-data> -->
          <span>{{infoData.infoName}}</span>
          <van-tag mark type="primary">VIP</van-tag>
        </div>
      </div>
    </div>
    <div style="margin-top:100rpx;">
      <div class="info-panel">
        <div class="info-content">
          <!-- <van-cell-group> -->
          <!-- <van-cell :title="infoData.status" :center="isCenter" title-width="80px" :value="infoData.abstract" :border="isBorder" /> -->
          <!-- </van-cell-group> -->
          <infoPanel :infoData.sync="infoData"></infoPanel>

          <div class="before-rate">
            <span>看完了别忘了点个赞哦！</span>
            <van-rate :value="rateVal" :readonly="isRate" size="20" count="6" color="#1989fa" void-color="#b4d4f5"
              @change="onChange" @click="stopRate" />
          </div>
        </div>
      </div>
    </div>

    <van-notify id="custom-selector" />
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import {
    imgUrl
  } from '../utils/config'
  import infoPanel from '../components/infoPanel'

  function rateFn(text) {
    Notify({
      text,
      duration: 1000,
      selector: '#custom-selector',
      backgroundColor: '#1989fa'
    });
  }

  import Notify from 'vant-weapp/dist/notify/notify';
  export default {
    config: {
      navigationBarTitleText: '我的'
    },
    components: {
      infoPanel
    },
    onLoad() {
      this.$ajax.$Get({
        url: 'userInfo'
      }).then(res => {
        this.infoData = res[0];
        console.log(res)
      })
    },
    data() {
      return {
        isCenter: true,
        isBorder: false,
        infoData: {},
        imgHost: imgUrl,
        rateVal: this.$store.getters.getRateVal || wx.getStorageSync('rate'),
        isRate: wx.getStorageSync('isRate') || false,
        firstRate: true, //是不是第一次评分
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },

    methods: {
      goEdit() {
        this.$router.push({
          path: 'editMessage',
          query: {
            data: 1
          }
        })
      },
      stopRate() {
        let _text = '小可爱您已经评过分了哟~';
        if(this.firstRate){
          this.firstRate = false;
        }
        if (wx.getStorageSync('firstRate')) {
          rateFn(_text);
          return;
        } 
      },
      onChange(e) {
        let _text = '谢谢小可爱的评分哦~',
          rateV = e.mp.detail;
        if (rateV) {
          rateFn(_text);
          this.rateVal = rateV;
          this.$store.commit('setRate', rateV);
          wx.setStorageSync('rate', rateV);
          wx.setStorageSync('isRate', true)
        }
      },
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  }

</script>

<style lang="scss">
  .my-header {
    width: 100%;
    height: 400rpx;
    position: relative;

    .user-info {
      width: 100%;
      // height: 150rpx;
      // background: indianred;
      position: absolute;
      left: 0;
      bottom: -20%;
      // opacity: .3;
      display: flex;
      flex-direction: column;
      align-items: center;

      .info-avatar {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 1rpx 2rpx 2rpx 2rpx rgb(235, 229, 229);

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info-nickname {
        height: 30rpx;
        font-size: 28rpx;
        line-height: 30rpx;

        span {}
      }

      .van-tag {
        margin-left: 10rpx;
      }
    }
  }

  .before-rate {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
      font-size: 24rpx;
    }
  }

  .info-panel {
    width: 100%;
    // padding-top: 100rpx;

    .info-content {
      width: 90%;
      height: 300rpx;
      margin: 0 auto;
    }
  }

</style>
