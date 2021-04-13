<template>
  <div>
    <login-bar title="登录哔哩哔哩">
      <template #right>
        <router-link tag="div" to="/register">切换到注册</router-link>
      </template>
    </login-bar>

    <login-input
      style="margin: 3vw 0"
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @reg-success='res => model.username = res'
      @reg-error='model.username = ""'
    />
    <login-input
      type="password"
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @reg-success='res => model.password = res'
      @reg-error='model.password = ""'
    />

    <login-btn btn-text="登录" @click.native="handleLogin"></login-btn>

  </div>
</template>

<script>
  import LoginBar from '@/components/common/LoginBar'
  import LoginBtn from '@/components/common/LoginBtn'
  import LoginInput from '@/components/content/LoginInput'

  import { sendLogin } from '@/network/login'

  export default {
    name: 'Login',
    components: {
      LoginBar,
      LoginInput,
      LoginBtn
    },
    data() {
      return {
        model: { //登录输入的数据模型
          username: '',
          password: ''
        }
      }
    },
    methods: {
      // 点击登录按钮
      async handleLogin() {
        const { username, password } = this.model
        if (username && password) {
          //校验成功，发送登录请求
          const res = await sendLogin(this.model)
          console.log(res)
          if(res.code === 200) { //登录成功,存储id、token,并跳转到个人中心页
            this.$msg.success(res.msg)
            localStorage.setItem('id', res.id)
            localStorage.setItem('token', res.token)
            setTimeout(() => {
              // this.$router.push('/userinfo')
              // 跳转到原先要访问的页面
              if (this.$route.query.redirectUrl) {
                this.$router.push({
                  path: this.$route.query.redirectUrl
                })
              }else {
                this.$router.push('/userinfo')
              }

            }, 1000)
          }else {
            this.$msg.fail(res.msg)
          }
        }else {
          //校验失败
          this.$msg.fail('格式不正确,请重新输入')
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>