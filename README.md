# beaver 河狸
河狸筑大坝
## 目录结构
 - build 构建工具
 - component/* 组件库
   - 统一为@beaver-ui/开头，除beaver-ui目录为本名
     - [beaver-ui](component%2Fbeaver-ui)
     - [library](component%2Flibrary)
     - [theme](component%2Ftheme)
     - [utils](component%2Futils)
 - docs 组件库文档
 - utils 工具库
 - play 组件库在线测试
 - test 单测
 - visualization 可视化工具
 - internal/* 项目内部工具
   - 统一为@beaver-internal/开头
     - [build](internal%2Fbuild)
     - [eslint-config](internal%2Feslint-config)
## PNPM操作命令
- 全局安装包 pnpm i --save-dev @types/node
- a包引用b包： pnpm -F @edit-plat/docs i @edit-plat/icons@*
- 某个子项目下安装包 pnpm -F @edit-plat/docs i vitepress

或者  pnpm i @beaver-ui/connection -F play
- 移除包 pnpm remove 包名
- 更新包 pnpm up 包名，更新最新 pnpm up 包名 --latest
