<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
// 下面两个还有导入顺序问题 ???
import { getLoginInfo } from '@/api/index'
import type { ILoginInfo } from '@/api/types/index'
import { onMounted, ref } from 'vue'

const store = useCounterStore()
const list = ref<ILoginInfo>()
onMounted(async () => {
  list.value = await getLoginInfo()
})
</script>
<template>
  <main>首页</main>
  <button @click="store.increment">加一</button>
  <span>{{ store.count }}</span>
</template>
