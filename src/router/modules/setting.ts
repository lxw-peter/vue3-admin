import { RouterView, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'setting',
  component: RouterView,
  children: [
    {
      path: 'roles',
      name: 'roles',
      component: () => import('@/views/setting/role/index.vue'),
    },
    {
      path: 'rights',
      name: 'rights',
      component: () => import('@/views/setting/right/index.vue'),
    },
    {
      path: 'process',
      name: 'process',
      component: () => import('@/views/setting/process/index.vue'),
    },
    {
      path: 'department',
      name: 'department',
      component: () => import('@/views/setting/department/index.vue'),
    },
    {
      path: 'car',
      name: 'car',
      component: () => import('@/views/setting/car/index.vue'),
    },
  ],
}
export default routes
