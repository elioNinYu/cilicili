<template>
  <div>
    <nav-bar :face-img="model.user_img" />

    <edit-banner
      @upload-avatar="uploadAvatar"
      :edit-info="model"
      @show-desc-dialog="showDescDialog"
      @show-gender-options="showGenderOptions"
    >
    </edit-banner>

    <edit-footer text="退出登录" @click.native="logoutClick" />
    <!-- <edit-footer text='返回个人中心' /> -->
    <edit-footer text="返回空间" @click.native="$router.back()" />

    <!-- 昵称弹出框(使用封装好的，但是复用不了了。。。) -->
    <dia-log title="修改昵称" @update-name="updateName"></dia-log>

    <!-- 个性签名弹出框 -->
    <van-dialog
      v-model="descShow"
      title="修改个性签名"
      @confirm="descConfirm"
      show-cancel-button
    >
      <van-field v-model="descText" autofocus />
    </van-dialog>

    <!-- 性别的动作面板 -->
    <van-action-sheet
      v-model="genderShow"
      :actions="genderOptions"
      cancel-text="取消"
      description="修改性别"
      @select="genderSelect"
      @cancel="genderCancel"
    />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";

import DiaLog from "@/components/content/Dialog";

import EditBanner from "./children/EditBanner";
import EditFooter from "./children/EditFooter";

import {
  getEditUserInfoData,
  uploadUserAvatar,
  updateUserInfoData,
} from "@/network/edit";

export default {
  name: "Edit",
  components: {
    NavBar,
    DiaLog,
    EditBanner,
    EditFooter,
  },
  data() {
    return {
      model: {}, // 保存用户信息的数据模型
      descShow: false, // 控制个性签名弹出框是否显示
      descText: "", //个性签名文本值
      genderShow: false, // 控制性别动作面板是否显示
      genderOptions: [
        { name: "男", val: 1 },
        { name: "女", val: 0 },
      ], // 性别选项
    };
  },
  created() {
    //调用获取编辑页要渲染的用户信息的函数
    this.getEditUserData();
  },
  methods: {
    /**
     * 网络请求相关函数
     */
    //获取编辑页要渲染的用户信息的函数
    async getEditUserData() {
      const id = localStorage.getItem("id");
      if (id) {
        try {
          // 发送获取编辑页用户信息的请求
          const res = await getEditUserInfoData(id);
          // 把接口返回的数据赋值给model
          this.model = res[0];
        } catch (error) {
          console.log(error);
        }
      }
    },
    // 数据(用户信息)更新的请求方法(封装好的,哪里需要更新就调用一下)
    // 参数1：需更新的key, 参数2：新的值
    async updateUserInfo(key, newVal) {
      try {
        const res = await updateUserInfoData(localStorage.getItem("id"), {
          ...this.model,
          [key]: newVal,
        });
        console.log(res);
        if (res.code === 200 && res.success) {
          //后端数据更新(修改)成功后前台界面再做相应的修改
          this.model[key] = newVal;
          this.$msg.success("修改成功");
        } else {
          this.$msg.fail("修改失败");
        }
      } catch (err) {
        console.log(err);
      }
    },
    //选择好需要上传的用户头像后的回调函数
    async uploadAvatar(file) {
      // 序列化(处理)文件上传需要的格式
      const formdata = new FormData();
      // 追加要上传的文件对象file到formdata对象中，这里的key('file')由后端决定
      formdata.append("file", file);
      try {
        //发送用户头像上传的请求,后端返回修改后头像的url
        const res = await uploadUserAvatar(formdata);
        //前台修改后端返回的用户头像url(此处不可以先做修改，以防止后端更新失败)
        // this.model.user_img = res.url
        // 选择完头像并且获取到后端返回修改后的头像url后发送请求
        // 调用数据更新的方法(更新用户头像)
        this.updateUserInfo("user_img", res.url);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * 事件处理相关函数
     */
    // 监听修改昵称的方法
    updateName(newName) {
      // 调用数据更新的方法(修改昵称)
      this.updateUserInfo("name", newName);
    },
    // 监听显示个性签名弹出框的方法
    showDescDialog() {
      this.descShow = true;
      // 把个签输入框的值双向绑定为接口返回的个签值
      this.descText = this.model.user_desc;
    },
    // 点击个签弹出框确认按钮时触发的函数
    descConfirm() {
      // 获取输入的要修改的个签值(去除前后空格)
      const descVal = this.descText.trim();
      // 调用数据更新的方法(修改个性签名)
      this.updateUserInfo("user_desc", descVal);
    },
    // 监听显示性别选项框的方法
    showGenderOptions() {
      this.genderShow = true;
    },
    //选择完性别的回调函数
    genderSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起，或将双向绑定的值设置为false
      this.genderShow = false;
      // 调用数据更新的方法(修改性别:0（女）或1（男）)
      this.updateUserInfo("gender", item.val);
    },
    // 点击性别选择框的取消选项的回调函数
    genderCancel() {
      this.$msg.fail("已取消");
    },
    // 退出登录
    logoutClick() {
      this.$dialog
        .confirm({
          title: "是否退出登录?",
        })
        .then(() => {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          this.$router.replace("/login");
          this.$msg.fail("请重新登录");
        })
        .catch(() => {
          // this.$msg.fail('已取消')
        });
    },
  },
};
</script>

<style scoped>
</style>