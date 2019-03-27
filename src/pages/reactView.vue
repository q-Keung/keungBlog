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
      <van-collapse-item title="声明式" name="1">
        <div class="react-show justify">
          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。
          以声明式编写UI，可以让你的代码更加可靠，且方便调试。
        </div>
      </van-collapse-item>
      <van-collapse-item title="组件化" name="2">
        <div class="react-show justify">
          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。
          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。
        </div>
      </van-collapse-item>
      <van-collapse-item title="全面技术栈" name="3">
        <div class="react-show justify">
          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。
          React 也可以用作开发原生应用的框架 React Native.
        </div>
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

    .van-collapse {
      .react-show {
        font-size: 24rpx;
      }
    }
  }

</style>
