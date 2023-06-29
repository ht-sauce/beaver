import { createRouter, createWebHistory } from 'vue-router'
import config from '../../env/config'
const router = createRouter({
  // import.meta.env.BASE_URL
  history: createWebHistory(config.base),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/design',
      component: () => import('@/views/design/index.vue'),
      meta: {
        title: '设计',
      },
    },
    {
      path: '/edit',
      component: () => import('@/views/edit/index.vue'),
      meta: {
        title: '编辑器',
      },
    },
    {
      path: '/preview',
      component: () => import('@/views/preview/index.vue'),
      meta: {
        title: '预览',
      },
    },
  ],
})

export default router
