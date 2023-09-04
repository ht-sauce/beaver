import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'beaver',
  titleTemplate: ':title | beaver',
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.png',
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
    // sidebar: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' },
    //     ],
    //   },
    // ],
  },
})
