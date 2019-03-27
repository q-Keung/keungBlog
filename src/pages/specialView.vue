<template>
  <div class="s-view">
    <!-- <div class="view-item" v-for="(item,index) in items" :key="index">
      <div class="view-title">
        <span>{{item.sTitle}}</span>
      </div>

      <image :src="item.src" mode="scaleToFill" lazy-load></image>

      <div class="view-p s-ellipsis">{{item.sContent}}</div>
    </div> -->

    <van-collapse :value="activeNames" @change="onChange" accordion>
      <van-collapse-item title="VueRouter" name="1">
        <ul class="justify">
          <li>Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：</li>
          <li>1.嵌套的路由/视图表</li>
          <li>2.模块化的、基于组件的路由配置</li>
          <li>3.路由参数、查询、通配符</li>
          <li>4.基于 Vue.js 过渡系统的视图过渡效果</li>
          <li>5.细粒度的导航控制</li>
          <li>6.带有自动激活的 CSS class 的链接</li>
          <li>7.HTML5 历史模式或 hash 模式，在 IE9 中自动降级</li>
          <li>8.自定义的滚动条行为</li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="Vuex" name="2">
        <ul class="justify">
          <li>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具
            devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。</li>
          <li>这个状态自管理应用包含以下几个部分：</li>
          <li>1.state，驱动应用的数据源</li>
          <li>2.view，以声明方式将 state 映射到视图</li>
          <li>3.actions，响应在 view 上的用户输入导致的状态变化。</li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="Vue服务端渲染" name="3">
        <ul class="justify">
          <li>Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML
            字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。
            服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。</li>
          <li>与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：</li>
          <li>1.更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。</li>
          <li>2.更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。</li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
  export default {
    name: 'specialView',
    config: {
      navigationBarTitleText: '专题区'
    },
    data() {
      return {
        items: [],
        activeNames: '1'
      }
    },
    onLoad(query) {
      if (query.to) {
        this.$ajax.$Where({
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
      onChange(event) {
        console.log(event)
        this.activeNames = event.mp.detail;
      }
    },

  }

</script>

<style lang="scss">
  .s-view {
    width: 100%;
    padding: 15rpx;

    .view-item {
      width: 100%;
      // margin-bottom: 20rpx;
      padding: 30rpx 0;
      border-top: rgb(236, 240, 240) 2rpx solid;

      // height: 220rpx;
      .view-p {
        font-size: 24rpx;
        height: 60rpx;
        width: 100%;
        word-spacing: 2rpx;
        // text-shadow: 0 0 2rpx 2rpx rgb(245, 240, 240);
      }

      image {
        width: 100%;
        height: 280rpx;
      }
    }

    .view-item:nth-last-child(1) {
      border-bottom: rgb(236, 240, 240) 2rpx solid;
    }

    .view-title {
      width: 100%;
      height: 40rpx;
      font-size: 26rpx;
      font-weight: 600;
      line-height: 40rpx;
      display: flex;
      justify-content: space-between;
    }

    .van-collapse {
      ._li {
        font-size: 24rpx;
      }
    }
  }

</style>
