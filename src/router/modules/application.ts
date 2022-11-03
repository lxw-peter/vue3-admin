import { RouterView, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'application',
  component: RouterView,
  meta: { name: '申请' },
  children: [
    {
      path: '',
      name: 'application',
      component: () => import('@/views/application/index.vue'),
      meta: { title: '用车申请' },
    },
    {
      path: 'detail/:id',
      name: 'applicationDetail',
      component: () => import('@/views/application/ApplicationDetail.vue'),
      meta: { title: '订单详情' },
    },
  ],
}

export default routes
