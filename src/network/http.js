// 封装axios请求的模块
import axios from 'axios'

export function http(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    if(id && token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  }, err => {
    return Promise.reject(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return Promise.reject(err)
  })

  //返回的类型是Promise
  return instance(config)
}

