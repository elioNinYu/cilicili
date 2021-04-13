module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 修改、覆盖样式变量(vant定制主题)
          'font-size-md': '3.733vw',
          'tabs-line-height': '11.733vw'
        },
      },
    },
  },
};