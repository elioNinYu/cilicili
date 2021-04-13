import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const UserInfo = () => import('@/views/userinfo/UserInfo')
const Edit = () => import('@/views/edit/Edit')
const Detail = () => import('@/views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      auth: true //需要登录权限
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      auth: true //需要登录权限
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    // meta: {
    //   auth: true //需要登录权限
    // }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置路由导航守卫(路由拦截器)
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.matched.some(record => record.meta.auth)) { //需要登录权限
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    if (id && token) {
      // 已登录
      next()
    } else {
      // 未登录，弹出toast并重定向到login页
      Vue.prototype.$msg.fail('请重新登录')
      next({
        path: '/login',
        query: { redirectUrl: to.fullPath } //携带原先要跳转的url方便登录后重定向
      })
    }
  } else {
    //不需要登录权限，直接放行
    next()
  }
})

export default router
