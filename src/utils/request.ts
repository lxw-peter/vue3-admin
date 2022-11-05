import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useLoginInfo } from '@/stores'
import router from '@/router'

// 创建一个实例
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

let isRefreshing = false
request.interceptors.response.use(
  function (response) {
    const status = response.data.status
    const { setUserInfo } = useLoginInfo()
    // 正常情况
    if (!status || status === 200) {
      return response
    }

    // 处理非正常场景，如：登录过期
    if (status === 410000) {
      if (isRefreshing) {
        return Promise.reject(response)
      }
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，需要重新登录吗', '登录过期')
        .then(() => {
          setUserInfo(null)
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath,
            },
          })
        })
        .finally(() => {
          isRefreshing = false
        })
    }

    ElMessage.error(response.data?.msg || '请求失败，请稍后重试')
    return Promise.reject(response.data)
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => {
    return (res.data.data || res.data) as T
  })
}
