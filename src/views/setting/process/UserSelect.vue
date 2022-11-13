<script lang="ts" setup>
import { ref } from 'vue'

interface IUser {
  value: string
  label: string
}

const loading = ref<boolean>(false)
const userList = ref<IUser[]>([])

const handlerQueryUserList = (str: string) => {
  if (!str) return
  let data = [
    { name: '李天明', userId: 'hy0001' },
    { name: '李天一', userId: 'hy0002' },
    { name: '王一笑', userId: 'hy0003' },
    { name: '田七', userId: 'hy0004' },
  ]
  loading.value = true
  // TODO，查询接口
  setTimeout(() => {
    userList.value = data
      .filter((item) => item.name.includes(str))
      .map((item) => {
        return {
          value: [item.name, item.userId].join(','),
          label: [item.name, item.userId].join(' '),
          a: 'sss',
        }
      })
    loading.value = false
  }, 1000)
}
</script>
<template>
  <el-select remote filterable placeholder="请输入姓名" :remote-method="handlerQueryUserList" :loading="loading">
    <el-option v-for="item in userList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
