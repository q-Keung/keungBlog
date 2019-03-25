<template>
  <div class="editInfo">
    <form report-submit="true" @submit="submit" @reset="reset">
      <van-cell-group>
        <van-field :value="infoName" placeholder="请输入您的身份" @abort="onChange" />
      </van-cell-group>
      <van-cell-group>
        <van-field :value="infoStatus" placeholder="请输入您的状态" @abort="onChange" />
      </van-cell-group>
      <van-cell-group>
        <van-field :value="message" label="简介" type="textarea" placeholder="请输入您的简介" autosize />
      </van-cell-group>
      <div class="form-button">
        <van-button type="info" size="small">确定</van-button>
        <van-button type="warning" size="small">重置</van-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: '编辑信息',
    config: {
      navigationBarTitleText: '编辑信息'
    },
    data() {
      return {
        infoName: '',
        infoStatus:'',
        message:''
      }
    },
    onLoad() {
      console.log(this.$root.$mp)
      let { data } = this.$root.$mp.query;
      if(data){
          let pages = getCurrentPages(),prevPage = pages[pages.length - 2];
          console.log(prevPage);
      }
    },
    methods: {
      onChange() {

      }
    },
  }

</script>

<style lang="scss">
  .editInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-button {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20rpx;
    }

    .van-cell-group {}
    textarea::-webkit-input-placeholder {
       line-height: 24px;
    }
    
    .van-button {
      margin-right: 20rpx;
    }
  }

</style>
