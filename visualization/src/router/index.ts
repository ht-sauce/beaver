import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/edit/index.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/preview/index.vue'),
    },
  ],
})

export default router
