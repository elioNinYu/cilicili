<template>
  <div>
    <nav-bar :face-img='model.user_img' />
    <user-detail :user-info="model" />
    <user-tab-bar />
  </div>
</template>

<script>
  import NavBar from '@/components/common/NavBar'

  import UserDetail from './children/UserDetail'
  import UserTabBar from './children/UserTabBar'

  import { requestUserInfoData } from '@/network/userinfo'

  export default {
    name: 'UserInfo',
    components: {
      NavBar,
      UserDetail,
      UserTabBar
    },
    data() {
      return {
        model: {} //如果写null会报错
      }
    },
    created() {
      // 调用获取用户信息数据的函数
      this.getUserInfoData()
    },
    methods: {
      /***
       * 网络请求相关函数
       */

      //获取用户信息
      async getUserInfoData() {
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        if (id && token) {
          try {
            const res = await requestUserInfoData(id)
            // console.log(res)
            this.model = res[0]
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>