<template>
  <div class="info-box" v-if="infoData">
    <div class="label">
      <span class="tag">{{ infoData.category.title }}</span>
      <h2 class="title">{{ infoData.name }}</h2>
    </div>
    <div class="data">
      <span>1024观看</span>
      <span>{{ infoData.commentlen }} 弹幕</span>
      <span>{{ infoData.date }}</span>
    </div>
    <div class="count">
      <span><van-icon name="good-job" />102.4万</span>
      <span><van-icon name="star" />8万</span>
      <span><van-icon name="share" />分享</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    infoData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.info-box {
  border-bottom: 0.23vw solid #e7e7e7;
  margin-top: 2.667vw;
  padding: 0 3.2vw 3.2vw;

  .label {
    line-height: 5.6vw;
    margin-bottom: 2.667vw;

    .tag {
      padding: 1vw 2.8vw;
      font-size: 3.2vw;
      color: #fb7299;
      background-color: #f4f4f4;
      border-radius: 3.2vw;
    }

    .title {
      display: inline;
      margin: 0 3vw;
      padding: 0;
      font-size: 4.26667vw;
      font-weight: 400;
      color: #212121;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .data {
    font-size: 3.2vw;
    color: #999;

    span {
      margin-right: 3.2vw;
    }
  }

  .count {
    margin-top: 2.133vw;

    span {
      margin-right: 2.13333vw;
      font-size: 2.667vw;
      color: #999;

      i {
        margin-right: 1.33333vw;
        font-size: 5.33333vw;
        color: #757575;
        vertical-align: middle;
      }
    }
  }
}
</style>