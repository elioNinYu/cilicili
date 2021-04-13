import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
require('vue-video-player/src/custom-theme.css')

import {
  Field,
  Toast,
  Icon,
  Uploader,
  Dialog,
  ActionSheet,
  Tab,
  Tabs,
  List
} from 'vant'

Vue.use(Field)
Vue.use(Icon)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(VueVideoPlayer)

Vue.prototype.$msg = Toast
Vue.prototype.$dialog = Dialog
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
