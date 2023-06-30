/*
 * in 在元素内部
 * self 本身
 * out 点击在外部
 * */
export type CPDEnum = 'in' | 'out' | 'self'
export type InParams = {
  bindDom: HTMLElement
  callback?: (CPDEnum: CPDEnum) => {}
}
