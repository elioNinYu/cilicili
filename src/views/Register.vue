<template>
  <div>
    <login-bar title="注册哔哩哔哩">
      <template #right>
        <router-link tag="div" to="/login">切换到登录</router-link>
      </template>
    </login-bar>

    <login-input
      style="margin: 3vw 0"
      label="姓名"
      placeholder="请输入姓名"
      rule="^.{2,10}$"
      @reg-success="(res) => (model.name = res)"
      @reg-error="model.name = ''"
    />
    <login-input
      style="margin: 3vw 0"
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @reg-success="(res) => (model.username = res)"
      @reg-error="model.username = ''"
    />
    <login-input
      type="password"
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @reg-success="(res) => (model.password = res)"
      @reg-error="model.password = ''"
    />

    <login-btn btn-text="注册" @click.native="handleRegister"></login-btn>
  </div>
</template>

<script>
import LoginBar from "@/components/common/LoginBar";
import LoginBtn from "@/components/common/LoginBtn";
import LoginInput from "@/components/content/LoginInput";

import { sendRegister } from "@/network/register";

export default {
  name: "Register",
  components: {
    LoginBar,
    LoginInput,
    LoginBtn,
  },
  data() {
    return {
      model: {
        //注册输入的数据模型
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 点击注册按钮
    async handleRegister() {
      const { name, username, password } = this.model;
      if (name && username && password) {
        //校验成功，发送注册请求
        const res = await sendRegister(this.model);
        console.log(res);
        if (res.code === 200) {
          //注册成功,存储id、token,并跳转到个人中心页
          this.$msg.success(res.msg);
          localStorage.setItem("id", res.id);
          localStorage.setItem("token", res.objtoken);
          setTimeout(() => {
            this.$router.push("/userinfo");
          }, 1000);
        } else {
          // 注册失败
          this.$msg.fail(res.msg);
        }
      } else {
        //校验失败
        this.$msg.fail("格式有误,请重新输入");
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>