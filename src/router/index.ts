import { createRouter, createWebHistory } from 'vue-router'
// 分开导入
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
