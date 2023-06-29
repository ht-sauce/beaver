export const config = {
  namespace: 'be', // 全局样式前缀
  connector: '-', // 连接符
  // css变量
}
export function getPrefix() {
  return config.namespace + config.connector
}
export function getCssVar() {
  return '--' + config.namespace + config.connector
}
