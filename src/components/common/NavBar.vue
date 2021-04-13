<template>
  <div class="nav-bar">
    <div class="logo" @click="gotoHome">cilicili</div>
    <div class="right">
      <div>
        <van-icon name="search" size="7.40vw" color="#ccc" />
        <!-- <van-search
          value="{{ value }}"
          input-align="center"
          placeholder="请输入搜索关键词"
        /> -->
      </div>
      <div v-if="faceImg" class="face" @click="gotoUserInfo">
        <img :src="faceImg" alt="" title="个人中心" />
      </div>
      <div v-else class="face" @click="gotoUserInfo">
        <img
          :src="model.user_img || require('@/assets/img/noface.jpg')"
          alt=""
          title="个人中心"
        />
      </div>
      <div>下载 App</div>
    </div>
  </div>
</template>

<script>
import { requestUserInfoData } from "@/network/userinfo";

export default {
  name: "NavBar",
  data() {
    return {
      // value: "",
      model: {},
    };
  },
  props: {
    faceImg: {
      type: String,
      // default: require('@/assets/img/noface.jpg')
    },
  },
  created() {
    // 没有传入用户头像再调用
    if (!this.faceImg) {
      // 调用获取用户信息数据的函数
      this.getUserInfoData();
    }
  },
  methods: {
    //获取用户信息
    async getUserInfoData() {
      const id = localStorage.getItem("id");
      if (id) {
        try {
          const res = await requestUserInfoData(id);
          // console.log(res)
          this.model = res[0];
        } catch (error) {
          console.log(error);
        }
      }
    },
    // 点击前往用户个人信息页
    gotoUserInfo() {
      // 原B站此处没做判断出现了bug
      if (this.$route.fullPath !== "/userinfo") {
        this.$router.push("/userinfo");
      } else {
        this.$msg.fail("已在此页面");
      }
    },
    // 点击前往首页
    gotoHome() {
      if (this.$route.fullPath === "/home" || this.$route.fullPath === "/") {
        this.$msg.fail("已在首页啦");
        return;
      }
      this.$router.push("/");
    },
    // onSearch() {},
    // onCancel() {},
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  height: 11.733vw;
  padding: 0 3.2vw 0 4.8vw;
  background-color: #fff;

  div {
    flex: 1;
  }

  .logo {
    font-family: icon;
    font-size: 6.4vw;
    font-weight: 700;
    color: #1296db;
  }
}

.right {
  display: flex;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
      width: 19.2vw;
      height: 6.4vw;
      padding: 0.1vw 3vw;
      font-size: 3vw;
      font-weight: 300;
      color: #fff;
      background-color: #fb7299;
      border-radius: 1.4vw;
    }
  }

  .face {
    margin-left: -3.733vw;
    img {
      width: 6.4vw;
      height: 6.4vw;
      border-radius: 3.2vw;
    }
  }
}
</style>