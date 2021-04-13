<template>
  <div class="edit-banner">
    <div class="upload_scope">
      <van-uploader
        class="upload_img"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <edit-item label="头像">
        <template #content>
          <img
            class="user_img"
            v-if="editInfo.user_img"
            :src="editInfo.user_img"
            alt=""
          />
          <img class="user_img" v-else src="@/assets/img/noface.jpg" alt="" />
        </template>
      </edit-item>
    </div>

    <edit-item label="昵称" @click.native="showNameDialog">
      <!-- <a href="javascript:;">{{ editInfo.name }}</a> -->
      <template #content>{{ editInfo.name ? editInfo.name : "" }}</template>
    </edit-item>

    <edit-item label="账号">
      <template #content>{{
        editInfo.username ? editInfo.username : ""
      }}</template>
    </edit-item>

    <edit-item label="性别" @click.native="showGenderOptions">
      <!-- editInfo.gender:0 或 1 -->
      <template #content>{{ editInfo.gender ? "男" : "女" }}</template>
    </edit-item>

    <edit-item label="出生日期">
      <template #content>2001.01.10</template>
    </edit-item>

    <edit-item label="个性签名" @click.native="showDescDialog">
      <template #content>{{
        editInfo.user_desc ? editInfo.user_desc : ""
      }}</template>
    </edit-item>
  </div>
</template>

<script>
import EditItem from "./EditItem";

export default {
  name: "EditBanner",
  components: {
    EditItem,
  },
  props: {
    editInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 选择好需要上传的用户头像后的回调函数
    afterRead({ file }) {
      this.$emit("upload-avatar", file);
    },
    // 监听昵称点击的函数,通知Dialog组件显示
    showNameDialog() {
      // 由于当前组件和Dialog组件互为平行组件，所以使用中央事件总线来发射事件
      this.$bus.$emit("showDialog", this.editInfo.name);
    },
    // 监听个性签名栏点击的函数,显示对应的Dialog弹出框
    showDescDialog() {
      this.$emit("show-desc-dialog");
    },
    // 监听性别栏点击的函数，显示对应的选项框
    showGenderOptions() {
      this.$emit("show-gender-options");
    },
  },
};
</script>

<style lang="less" scoped>
.edit-banner {
  margin: 3.2vw 0 5.333vw;
  background-color: #fff;

  .upload_scope {
    position: relative;
    overflow: hidden;

    .upload_img {
      position: absolute;
      opacity: 0;
    }
  }

  .user_img {
    width: 12.26667vw;
    height: 12.26667vw;
    border-radius: 50%;
    vertical-align: middle;
  }
}
</style>