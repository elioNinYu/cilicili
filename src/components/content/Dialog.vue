<template>
  <van-dialog
    v-model="isShow"
    :title="title"
    @confirm="confirm"
    show-cancel-button
  >
    <van-field v-model="text" :placeholder="placeholder" autofocus/>
  </van-dialog>
</template>

<script>
  export default {
    name: 'Dialog',
    data() {
      return {
        text: '', // 输入框的值
        isShow: false // 控制弹出框是否显示
      }
    },
    props: {
      // isShow: {
      //   type: Boolean,
      //   default: false
      // },
      title: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    created() {
      // 监听弹出框的显示(通过中央事件总线的方式)
      this.$bus.$on('showDialog', (name) => {
        this.isShow = true
        this.text = name
      })
    },
    methods: {
      // 点击确认按钮时触发的函数
      confirm() {
        // 获取输入的要修改的昵称值(去除前后空格)
        if (this.text.trim()) {
          this.$emit('update-name', this.text.trim())
        }else {
          this.$msg.fail('昵称不能为空')
        }
        // 清空输入的内容
        this.text = ''
      },
      // 点击取消按钮时触发的函数
      cancel() {
        // 清空输入的内容(由于已经将接口的数据值双向绑定到输入框的值，所以此处不必清空)
        // this.text = ''
      }
    }
  }
</script>

<style scoped>

</style>