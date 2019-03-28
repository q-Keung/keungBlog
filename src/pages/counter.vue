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
    <div class="info-panel-margin">
      <div class="info-panel">
        <div class="info-content">
          <!-- <van-cell-group> -->
          <!-- <van-cell :title="infoData.status" :center="isCenter" title-width="80px" :value="infoData.abstract" :border="isBorder" /> -->
          <!-- </van-cell-group> -->
          <infoPanel :infoData.sync="infoData"></infoPanel>

          <div class="before-rate">
            <span>看完了别忘了点个赞哦！</span>
            <van-rate id="rate" :value="rateVal" :readonly="isRate" size="20" count="6" color="#1989fa" void-color="#b4d4f5"
              @change="onChange" />
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
  const rateDom = wx.createSelectorQuery();
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

        rateVal: this.$store.getters.getRateVal || wx.getStorageSync('rate'),   //评分值
        isRate:  wx.getStorageSync('rate') && true || false,    //只读状态
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
      onChange(e) {
        let _text = '谢谢小可爱的评分哦~',
          rateV = e.mp.detail;
        if (rateV) {
          rateFn(_text);
          this.isRate = true;
          this.$store.commit('setRate', rateV); //小程序未重载时的评分值
          wx.setStorageSync('rate', rateV);   //评分值
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
  .info-panel-margin{
    margin-top:100rpx;
  }
  .before-rate {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 30rpx;
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
