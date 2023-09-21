export const config = {
  namespace: 'be', // 全局样式前缀
  connector: '-', // 连接符
  // css变量
}
export function getPrefix() {
  return config.namespace + config.connector
}
// 获取css变量
export function getCssVar(cssVarName: string, isVarSplicing: boolean = false) {
  const cssVar = '--' + config.namespace + config.connector + cssVarName
  return isVarSplicing ? `var(${cssVar})` : cssVar
}

export function setNamespace(namespace: string) {
  config.namespace = namespace
}
