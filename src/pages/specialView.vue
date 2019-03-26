<template>
  <div class="s-view">
    <div class="view-item" v-for="(item,index) in items" :key="index">
      <div class="view-lf">
        <image :src="item.src" mode="scaleToFill" lazy-load></image>
        <span>{{item.sTitle}}</span>
      </div>
      <div class="view-p justify s-ellipsis">{{item.sContent}}</div>
    </div>
  </div>
</template>

<script>
  import Https from '../utils/https'
  const $https = new Https();
  export default {
    name: 'specialView',
    config: {
      navigationBarTitleText: '专题列表'
    },
    data() {
      return {
        items: []
      }
    },
    onLoad(query) {
      if (query.to) {
        $https.$Where({
          url: 'getSpecialItem',
          data: {
            link: query.to
          }
        }).then(res => {
          this.items = res[0].data;
          console.log(res[0])
        })
      } else {

      }
    },
    methods: {

    },

  }

</script>

<style lang="scss">
  .s-view {
    width: 100%;
    padding: 15rpx;

    .view-item {
      width: 100%;
      display: flex;
      margin-bottom: 20rpx;
      height: 220rpx;

      .view-p {
        font-size: 24rpx;
        height: 100%;
        width: 80%;
        // text-shadow: 0 0 2rpx 2rpx rgb(245, 240, 240);
      }
    }

    .view-lf {
      margin-right: 10rpx;
      height: 100%;
      flex: 1;

      image {
        height: 180rpx;
        width: 250rpx;
      }

      span {
        font-size: 24rpx;
        font-weight: 600;
        text-align: center;
        display: block;
        height: 40rpx;
        line-height: 1;
      }
    }
  }

</style>
