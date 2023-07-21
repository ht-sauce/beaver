import { createRouter, createWebHistory, RouterOptions } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home.vue'),
      meta: {
        title: '根页面',
      },
    },
    {
      path: '/color',
      component: () => import('@/views/color/index.vue'),
      meta: {
        title: '调色盘',
      },
    },
    {
      path: '/test',
      component: () => import('@/views/test/index.vue'),
      meta: {
        title: '测试',
      },
    },
    {
      path: '/popper',
      component: () => import('@/views/popper/index.vue'),
      meta: {
        title: 'popper自研浮框',
      },
    },
    {
      path: '/render-vue',
      component: () => import('@/views/RenderVue/index.vue'),
      meta: {
        title: 'vue代码输入运行',
      },
    },
    {
      path: '/render-vue-repl',
      component: () => import('@/views/repl/index.vue'),
      meta: {
        title: 'vue-repl运行',
      },
    },
    {
      path: '/jump-outer-chain',
      component: () => import('@/views/JumpOuterChain/index.vue'),
      meta: {
        title: '跳转外链拦截尝试',
      },
    },
  ],
} as RouterOptions)

export default router
