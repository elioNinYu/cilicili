// 编辑个人信息页请求数据接口的模块
import { http } from './http'

// 请求编辑页用户信息的函数
export function getEditUserInfoData(id) {
  return http({
    url: '/user/' + id
  })
}

// 上传用户头像的请求函数(参数data为序列化后的,要上传的文件对象formdata)
export function uploadUserAvatar(data) {
  return http({
    url: '/upload',
    method: 'post',
    data
  })
}

// 修改完本地用户信息数据后发送的请求(告知后台做相应的数据修改)
export function updateUserInfoData(id, model) {
  return http({
    url: '/update/' + id,
    method: 'post',
    data: model
  })
}