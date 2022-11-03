export interface IUserInfo {
  id: number
  used: number
  name: string
  userId: string
  roles: string[]
  rights: string[]
  department: string
  createTime: string
  signature: string | null
  updateTime: string | null
  lastLogTime: string | null
}
export interface ILoginResponse {
  token: string
  userInfo: IUserInfo
}
