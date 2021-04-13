<template>
  <div class="tabs">
    <span class="active">动态</span>
    <span>视频</span>
  </div>
</template>

<script>
  export default {
    name: 'UserTabBar'
  }
</script>

<style lang="less" scoped>
  .tabs {
    background-color: #fff;

    span {
      display: inline-block;
      margin: 0 4vw;
      line-height: 10vw;
      font-size: 3.46667vw;
      color: #757575;
    }

    .active {
      color: #fb7299;
    }
  }
</style>