export const config = {
  namespace: 'be', // 全局样式前缀
  connector: '-', // 连接符
  // css变量
}
export function prefix() {
  return {
    main: config.namespace + config.connector,
  }
}
