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
    <rate-bottom :rateVal="$store.getters.getRateVal"></rate-bottom>
  </div>
</template>

<script>
  import rateBottom from '../components/rateBottom'
  import nodata from '../components/nodata'
  import Https from '../utils/https'
  const $https = new Https();
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
        $https.$Where({
          url: 'getDetails',
          data: {
            link: options.to
          },
          loading: true
        }).then(res => {
          this.detailsData = res[0].details;
          console.log(this.detailsData)
        })
      } else {
        this.isNoData = true;
      }
    },
    data() {
      return {
        detailsData: [],
        isNoData: null
      }
    },
    methods: {

    }
  }

</script>

<style lang="scss">
  .de-padding {
    padding-bottom: 80rpx;
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
