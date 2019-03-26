<template>
    <div class="no-data">
        <p>暂无数据。。。</p>
    </div>
</template>

<script>
export default {
    props:[]
}
</script>

<style lang="scss">
    .no-data{
        width:300rpx;
        height:100rpx;
        border-radius: 50%;
        background:whitesmoke;
        color:rgb(245, 232, 207);
        position: fixed;;
        top:0;left:0;right:0;bottom:0;
        margin:auto;
        line-height:100rpx;
        text-align:center;

        p{
            font-size:26rpx;
        }
    }
</style>
