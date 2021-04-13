// 注册请求数据接口的模块
import { http } from './http'

//data:{name,username,password}
export function sendRegister(data) {
  return http({
    url: '/register',
    method: 'post',
    data
  })
}

