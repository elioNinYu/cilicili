<template>
  <div class="footer">
    <a href="javascript:;">{{ text }}</a>
  </div>
</template>

<script>
  export default {
    name: 'EditFooter',
    props: {
      text: String,
      required: true
    }
  }
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    justify-content: center;
    background-color: #fff;
    font-size: 3.73333vw;
    padding: 2.66667vw 0;
    margin-top: 0.53333vw;

    a {
      color: #505050;
    }
  }
</style>