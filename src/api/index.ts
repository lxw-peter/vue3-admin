import request from '@/utils/request'
import type { ILoginInfo } from '@/api/types/index'
// 根据接口参数类型定义泛型

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info',
  })
}
