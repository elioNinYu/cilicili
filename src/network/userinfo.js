// 用户信息请求数据接口的模块
import { http } from './http'

// token在请求拦截器中统一设置
// export function requestUserInfoData(id,token) {
//   return http({
//     url: '/user/'+ id,
//     headers: {
//       'Authorization': 'Bearer ' + token
//     }
//   })
// }

// 请求用户个人信息的函数
export function requestUserInfoData(id) {
  return http({
    url: '/user/'+ id
  })
}