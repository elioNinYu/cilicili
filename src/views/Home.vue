<template>
  <div class="home">
    <nav-bar class="nav-bar"></nav-bar>

    <van-tabs
      sticky
      offset-top="11.52vw"
      v-model="active"
      animated
      swipeable
      color="#FB7299"
      title-active-color="#FB7299"
      line-width="8vw"
      line-height="0.533vw"
    >
      <van-tab v-for="item in navCategory" :title="item.title" :key="item._id">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="到底啦"
          :immediate-check="false"
          @load="onLoadMore"
        >
          <video-list :list-data="item.list" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";

import VideoList from "@/components/content/videos/VideoList";

import { getNavbarCategory, getArticleData } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    VideoList,
  },
  data() {
    return {
      active: 0, // 当前激活的导航栏分类对应的索引值
      navCategory: [], // 保存导航栏所有类别
      pagesize: 10, // 每一页请求的文章条数
    };
  },
  created() {
    // 调用获取导航栏所有类别的请求函数
    this.getNavCategory();
  },
  watch: {
    // 监听导航栏分类的切换
    active() {
      // 判断当前选中的类别的数据是否为空
      if (!this.navCategory[this.active].list.length) {
        // 调用获取当前选中的导航栏分类对应的文章数据的请求函数
        this.getArticle();
      }
    },
  },
  methods: {
    // 获取导航栏所有类别的请求函数
    async getNavCategory() {
      try {
        const res = await getNavbarCategory();
        // 调用改造请求返回的导航栏类别数据结构的方法
        this.changeNavCategory(res);
        // 首次进入首页需调用获取当前选中的导航栏分类对应的文章数据的请求函数
        this.getArticle();
      } catch (err) {
        console.log(err);
      }
    },
    // 获取当前选中的导航栏类别对应的文章数据的请求函数
    async getArticle() {
      // 当前选中的类别
      const currentCategory = this.navCategory[this.active];
      try {
        const res = await getArticleData(currentCategory, this.pagesize);
        // 给对应的类别追加接口返回的文章数据
        currentCategory.list.push(...res);
        // 请求完毕,加载状态结束
        currentCategory.loading = false;
        // 判断数据是否已全部加载完毕
        if (res.length < this.pagesize) {
          currentCategory.finished = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    // 改造导航栏类别数据结构的方法
    changeNavCategory(data) {
      /*
          向每个导航栏类别的对象添加以下属性：
          list: 存储文章的数组
          page: 当前页码（默认为0）
        */
      data.map((item) => {
        item.list = [];
        item.page = 0;
        (item.loading = false), // 控制是否处于加载状态
          (item.finished = false); // 控制数据是否已全部加载完毕的状态
      });
      // 把改造后的数据赋值给navCategory
      this.navCategory = data;
    },
    // 监听上拉加载更多的回调函数(组件滚动到底部时触发),ajax请求,异步更新数据
    onLoadMore() {
      // 获取当前选中的类别
      const currentCategory = this.navCategory[this.active];
      // 延迟1秒是为了看到加载更多的过程
      // setTimeout(() => {
      // 当前选择的类别对应的页码加一
      currentCategory.page += 1;
      // 发送请求,加载更多数据
      this.getArticle();
      // }, 1000)
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
  .nav-bar {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 999;
  }
}
</style>
