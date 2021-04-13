<template>
  <div class="login-bar">
    <div></div>
    <div>{{ title }}</div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'LoginBar',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-bar {
    display: flex;
    height: 11.733vw;
    // line-height: 11.733vw;
    // text-align: center;
    font-size: 4.267vw;
    background-color: #fff;
    box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>