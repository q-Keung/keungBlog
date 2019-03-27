<template>
  <div class="details-box">
    <div class="de-padding">
      <div class="de-content" v-for="(item,cur) in detailsData" :key="cur">
        <image :src="item.imgs" mode="scaleToFill" lazy-load v-if="item.imgs"></image>
        <div class="justify" v-if="item.contents">{{item.contents}}</div>
      </div>
    </div>
    <nodata v-if="isNoData"></nodata>
    <!-- v-for="(item,cur) in detailsData" :key="cur" -->
    <!-- <rate-bottom :rateVal="rateVal" :rateId="rateId"></rate-bottom> -->
  </div>
</template>

<script>
  import rateBottom from '../components/rateBottom'
  import nodata from '../components/nodata'
  export default {
    components: {
      rateBottom,
      nodata
    },
    config: {
      navigationBarTitleText: '详情'
    },
    onLoad(options) {
      if (options.to) {
        this.$ajax.$Where({
          url: 'getDetails',
          data: {
            link: options.to
          },
          loading: true
        }).then(res => {
          this.detailsData = res[0].details;
          this.rateVal = res[0].rateVal;
          this.rateId = res[0]._id;
          console.log(res)
        })
      } else {
        this.isNoData = true;
      }
    },
    onUnload(){
      this.detailsData = [];
    },
    data() {
      return {
        detailsData: [],
        isNoData: null,
        rateVal:0,
        rateId:''
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">
  .de-padding {
    padding-bottom: 20rpx;
  }

  .de-content {
    width: 100%;
    min-height: 300rpx;
    padding: 15rpx;

    // background: antiquewhite;
    div {
      font-size: 28rpx;
    }

    image {
      width: 100%;
      height: 360rpx;
    }
  }

</style>
