<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less" scoped>
  @import "./assets/css/normalize.css";

  #app {
    background-color: #f4f4f4;
    height: 100vh;
  }
</style>