<template>
  <div class="item">
    <span>{{ label }}</span>
    <span class="content"><slot name="content"></slot></span>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 2.667vw 3.2vw;
  border-bottom: 0.24vw solid #eee;

  span {
    align-self: center;
    font-size: 4vw;
    color: #505050;
  }

  .content {
    color: #999;
  }
}
</style>