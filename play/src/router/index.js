import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home.vue'),
      meta: {
        title: '跟页面',
      },
    },
    {
      path: '/color',
      component: () => import('@/views/color/index.vue'),
      meta: {
        title: '调色盘',
      },
    },
  ],
})

export default router
