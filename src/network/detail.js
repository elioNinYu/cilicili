// 详情页请求数据接口的模块
import { http } from './http'

// 根据不同id获取不同详情页文章数据的请求函数
export function getArticleData(id) {
  return http({
    url: '/article/' + id
  })
}

//获取详情页推荐数据的请求函数
export function getDetailCommendData() {
  return http({
    url: '/commend'
  })
}

