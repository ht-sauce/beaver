import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'beaver',
  titleTemplate: ':title | beaver',
  outDir: '../dist',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ht-sauce' },
      { icon: 'discord', link: 'https://juejin.cn/user/1873223545523101' },
    ],
    nav: [
      // { text: 'Guide', link: '/guide' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },
    ],
    sidebar: [
      {
        text: 'beaver河狸组件库',
        items: [{ text: '主题', link: '/beaver/color' }],
        collapsed: true, // 是否可折叠
      },
    ],
  },
})
