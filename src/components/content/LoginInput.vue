<template>
  <div>
    <van-field
      v-model="content"
      :type="type"
      :label="label"
      :placeholder="placeholder"
      clearable
    />
  </div>
</template>

<script>
  export default {
    name: 'LoginInput',
    data() {
      return {
        content: ''
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      placeholder: String,
      rule: String
    },
    methods: {
      //校验表单正则的函数
      inputChange(){
        const reg = new RegExp(this.rule)
        if(reg.test(this.content)) {
          //校验成功,发出成功事件
          this.$emit('reg-success', this.content)
        }else{
          //检验失败,发出失败事件
          this.$emit('reg-error')
        }
      }
    },
    watch: {
      //实时监视表单值的改变，调用校验表单正则的函数
      content(){
        this.inputChange()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>