// 登录请求数据接口的模块
import { http } from './http'

//发送登录的请求函数
export function sendLogin(data) {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

