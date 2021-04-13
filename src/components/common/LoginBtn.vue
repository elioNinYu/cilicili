<template>
  <div class="btn">
    {{ btnText }}
  </div>
</template>

<script>
  export default {
    name: 'LoginBtn',
    props: {
      btnText: {
        type: String,
        default: '按钮'
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin: 3vw 0;
    height: 12vw;
    line-height: 12vw;
    text-align: center;
    font-size: 4.267vw;
    color: #fff;
    background-color: #ff9db5;
    border-radius: 6vw;
  }
</style>