<script lang="ts" setup>
import { toRefs } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const { count, increment } = toRefs(store)
console.log(count, increment)
</script>
<template>
  <main>首页</main>
  <button @click="store.increment">加一</button>
  <span>{{ store.count }}</span>
</template>
