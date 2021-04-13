module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // style: true
      // 按需引入样式源文件
      style: (name) => `${name}/style/less`,
    }, 'vant']
  ]
}
