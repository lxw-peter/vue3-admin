import { RouterView, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'user',
  component: RouterView,
  children: [
    {
      path: 'usercenter',
      name: 'usercenter',
      component: () => import('@/views/user/UserCenter.vue'),
    },
    {
      path: 'userset',
      name: 'userset',
      component: () => import('@/views/user/UserSet.vue'),
    },
  ],
}
export default routes
