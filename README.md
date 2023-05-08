# ui-edit
闲的试一试

## 目录结构
 - build 构建工具
 - component 组件库
 - docs 组件库文档
 - utils 工具库
 - play 组件库在线测试
 - test 单测
 - visualization 可视化工具
 - 
## PNPM操作命令
- 全局安装包 pnpm i --save-dev @types/node
- a包引用b包： pnpm -F @edit-plat/docs i @edit-plat/icons@*
- 某个子项目下安装包 pnpm -F @edit-plat/docs i vitepress
- 移除包 pnpm remove 包名
- 更新包 pnpm up 包名，更新最新 pnpm up 包名 --latest