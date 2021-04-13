<template>
  <div>
    <div class="playArea">
      <video-player
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @pause="onPlayerPause($event)"
        @play="onPlayerPlay($event)"
        @ended="onPlayerEnded($event)"
      >
        Your browser does not support the video tag.
      </video-player>
      <div class="tilt" @click="onPlayerClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailVideo",
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "metadata", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src: require("@/assets/video/play_test.mp4"), // url地址
          },
        ],
        poster: require("@/assets/img/poster.jpg"), // 封面地址
        // poster:
        //   "//i0.hdslb.com/bfs/archive/0bdd2084983ea2d0d7cba479c3f3fee73dc06cfc.jpg@480w_270h_1c",
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    onPlayerPause($event) {
      this.isPlay = false;
    },
    onPlayerPlay($event) {
      this.isPlay = true;
    },
    onPlayerEnded($event) {},
    onPlayerClick() {
      if (this.isPlay) {
        this.player.pause();
      } else {
        this.player.play();
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* .video {
  width: 100%;
} */
.playArea {
  position: relative;
  /deep/ #vjs_video_3 {
    border-radius: 8px;
    .vjs-big-play-button {
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%);
      // background: url("@/assets/img/play.png") no-repeat;
      background-size: cover;
      border: none;
      width: 32px;
      height: 32px;
      opacity: 0;
    }
    .vjs-poster {
      border-radius: 8px;
    }
  }
  /deep/.vjs-big-play-button .vjs-icon-placeholder:before {
    display: none !important;
  }
  .tilt {
    width: 100%;
    height: 90%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 99999;
  }
}
</style>