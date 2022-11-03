import request from '@/utils/request'
import type { ILogin } from '@/api/types/index'

// 根据接口参数类型定义泛
export const login = (data: { password: string; userId: string }) => {
  return request<ILogin>({
    method: 'POST',
    url: '/user/login',
    data,
  })
}
