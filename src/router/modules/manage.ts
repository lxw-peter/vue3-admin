import { RouterView, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'manage',
  component: RouterView,
  meta: { name: '管理' },
  children: [
    {
      path: 'customer',
      name: 'customer',
      component: () => import('@/views/manage/customer/index.vue'),
      meta: { name: '客户管理' },
    },
    {
      path: 'dispatchList',
      name: 'dispatchList',
      component: () => import('@/views/manage/dispatch/index.vue'),
      meta: { name: '派车管理' },
    },
    {
      path: 'invoice',
      name: 'invoice',
      component: () => import('@/views/manage/invoice/index.vue'),
      meta: { name: '发票管理' },
    },
    {
      path: 'operation/:id',
      name: 'operation',
      component: () => import('@/views/manage/operation/index.vue'),
      meta: { name: '运行管理' },
    },
  ],
}

export default routes
