// 首页请求数据接口的模块
import { http } from './http'

// 获取导航栏类别的请求函数
export function getNavbarCategory() {
  return http({
    url:'/category'
  })
}

// 获取当前选中的导航栏分类对应的文章数据的请求函数
// http://112.74.99.5:3000/web/api/detail/9?page=0&pagesize=10
export function getArticleData({ _id, page}, pagesize) {
  return http({
    url: '/detail/' + _id,
    params: {
      page,
      pagesize
    }
  })
}

