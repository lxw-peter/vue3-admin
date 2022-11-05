import { createRouter, createWebHistory } from 'vue-router'
// 分开导入类型
import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import ManageRoutes from './modules/manage'
import SettingRoutes from './modules/setting'
import UserRoutes from './modules/user'
import ApplicationRoutes from './modules/application'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useLoginInfo } from '@/stores'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
      ApplicationRoutes,
      UserRoutes,
      ManageRoutes,
      SettingRoutes,
    ],
  },
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  NProgress.start()
  const { userInfo } = useLoginInfo()
  if (to.meta?.requireAuth && !userInfo) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
