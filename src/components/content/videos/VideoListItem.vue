<template>
  <div class="item" @click="VideoItemClick">
    <!-- <img :src="dataItem.img" alt=""> -->
    <!-- <img src="https://i0.hdslb.com/bfs/archive/8339e4a40c1a10cfb0e0abe0bc4ef6ecbd61a45f.jpg@480w_270h_1c" alt=""> -->
    <div class="img_box">
      <img
        src="https://i0.hdslb.com/bfs/archive/e1e626649feb21b34d88059b73c6feb64333a0aa.jpg@480w_270h_1c"
        alt=""
      />
      <div class="count">
        <span class="play"> <van-icon name="play-circle-o" /> 172万 </span>
        <span class="comment">
          <van-icon name="comment-o" />
          {{ dataItem.commentlen ? dataItem.commentlen : 0 }}
        </span>
      </div>
    </div>
    <p class="title">{{ dataItem.name }}</p>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    dataItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 监听文章每一项的点击,跳转到对应的详情页
    VideoItemClick() {
      if (this.$route.fullPath === `/detail/${this.dataItem.id}`) {
        this.$msg.fail("已在此页面");
        return;
      }
      this.$router.push("/detail/" + this.dataItem.id);
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 46%;
  padding: 2.133vw 0;

  .img_box {
    position: relative;
    border-radius: 0.53333vw;
    overflow: hidden;

    img {
      width: 100%;
    }

    .count {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.33333vw;
      font-size: 3.2vw;
      color: #fff;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(rgba(0, 0, 0, 0.85)),
        to(transparent)
      );
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);

      span > i {
        vertical-align: top;
      }
    }
  }

  .title {
    width: 90%;
    margin-top: 1.6vw;
    margin-bottom: 0;
    padding: 0;
    font-size: 3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>