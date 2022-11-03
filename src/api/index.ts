import request from '@/utils/request'
import type { ILoginResponse } from '@/api/types/index'

// 根据接口参数类型定义泛
export const login = (data: { password: string; userId: string }) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/user/login',
    data,
  })
}
