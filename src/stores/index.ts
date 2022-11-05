import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUserInfo } from '@/api/types/index'
import { USER } from '@/utils/constans'
import { getItem, setItem } from '@/utils/storages'

type TUserInfo = ({ token: string } & IUserInfo) | null

export const useLoginInfo = defineStore('loginInfo', () => {
  const userInfo = ref(getItem<TUserInfo>(USER))

  function setUserInfo(data: TUserInfo) {
    userInfo.value = data
    setItem(USER, data)
  }
  return { userInfo, setUserInfo }
})
