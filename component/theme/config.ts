export const config = {
  namespace: 'be', // 全局样式前缀
  connector: '-', // 连接符
  // css变量
}
export function getPrefix() {
  return config.namespace + config.connector
}
// 命名空间首字符大写
export function FirstUppercaseNamespace(componentName: string) {
  return config.namespace.slice(0, 1).toUpperCase() + config.namespace.slice(1).toLowerCase() + componentName
}
// 获取css变量
export function getCssVar() {
  return '--' + config.namespace + config.connector
}
