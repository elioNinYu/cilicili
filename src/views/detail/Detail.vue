<template>
  <div class="detail" v-if="model">
    <nav-bar class="navbar"/>
    <detail-video class="play" :play-url='model.content'/>
    <detail-info :info-data='model'/>
    <video-list :list-data='commendList'/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/NavBar'
  import VideoList from '@/components/content/videos/VideoList'

  import DetailVideo from './children/DetailVideo'
  import DetailInfo from './children/DetailInfo'

  import { getArticleData, getDetailCommendData } from '@/network/detail'

  export default {
    name: 'Detail',
    data() {
      return {
        model: null,
        commendList: []
      }
    },
    components: {
      NavBar,
      DetailVideo,
      DetailInfo,
      VideoList
    },
    created() {
      // 调用请求详情页文章数据函数
      this.getDetailData()
      // 调用获取详情页推荐文章函数
      this.getCommendData()
    },
    watch: {
      // 监视路由路径的变化
      $route() {
        // 调用请求详情页文章数据函数
        this.getDetailData()
        // 调用获取详情页推荐文章函数
        this.getCommendData()
      }
    },
    methods: {
      // 请求详情页文章数据的函数
      async getDetailData() {
        try {
          const res = await getArticleData(this.$route.params.id)
          this.model = res[0]
        } catch (err) {
          console.log(err)
        }
      },
      // 请求推荐数据的函数
      async getCommendData() {
        try {
          const res = await getDetailCommendData()
          this.commendList = res
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail{
    background-color: #fff;
    height: 100vh;

    .navbar {
      position: fixed;
      left: 0;
      top: 0;
      width: 92%;
      z-index: 999;
    }

    .play {
      margin-top: 43px;
    }
  }
</style>