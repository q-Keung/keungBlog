<script>
  export default {
    globalConfig: {
      usingComponents: {
        "van-button": "vant-weapp/dist/button/index",
        'van-tag': 'vant-weapp/dist/tag/index',
        "van-popup": "vant-weapp/dist/popup/index",
        "van-dialog": "vant-weapp/dist/dialog/index",
        "van-loading": "vant-weapp/dist/loading/index",
        "van-notify": "vant-weapp/dist/notify/index",
        "van-toast": "vant-weapp/dist/toast/index",
        "van-notice-bar": "vant-weapp/dist/notice-bar/index",
        "van-action-sheet": "vant-weapp/dist/action-sheet/index",
        "van-rate": "vant-weapp/dist/rate/index",
        "van-icon": "vant-weapp/dist/icon/index",
        "van-panel": "vant-weapp/dist/panel/index",
        "van-search": "vant-weapp/dist/search/index",
        "van-tab": "vant-weapp/dist/tab/index",
        "van-tabs": "vant-weapp/dist/tabs/index",
        "van-field": "vant-weapp/dist/field/index",
        "van-cell": "vant-weapp/dist/cell/index",
        "van-cell-group": "vant-weapp/dist/cell-group/index",
        "van-transition": "vant-weapp/dist/transition/index"
      },
    },
    created() {},
  }

</script>

<style lang="scss">
  // @import '../style/font.scss';
  .container {
    height: 100%;
    box-sizing: border-box;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
    margin: 0;
    padding: 0;
  }

  div {
    box-sizing: border-box;
  }

  image {
    width: 100%;
    height: 100%;
  }

  /*shadow model*/
  .shadow-border {
    border: 1rpx solid rgb(250, 247, 247);
    box-shadow: 0 0 4rpx 2rpx rgb(243, 240, 240);
    border-radius: 10rpx;
  }

  /*shadow model*/
  /*flex*/
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex-columu-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /*flex end*/

  /*单行文字超出部分省略号*/
  .d-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /*多行文字超出省略号*/
  .s-ellipsis {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /*超出两行则显示省略*/
    overflow: hidden;
  }

  .m-ellipsis {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
  /*多行文字超出省略号*/

  /**全局滚动条隐藏**/
  ::-webkit-scrollbar {
    display: none;
  }
  /*文字两边对齐*/
  .justify{
    text-align: justify;
  }
  .justify::after{
    display:inline-block;
    width:1005；
  }
</style>
