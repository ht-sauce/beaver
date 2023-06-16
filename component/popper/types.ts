// 默认方位
export type Direction = 'left' | 'right' | 'top' | 'bottom'
// 创建的时候的入参
export interface PopperNewParams<Dom extends HTMLElement> {
  dom: Dom
  direction?: Direction
  offset?: number
}
