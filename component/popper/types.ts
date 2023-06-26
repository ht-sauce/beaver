// 位置
export type Position = 'top' | 'bottom' | 'left' | 'right'
// 上下
export type UpDown = undefined | 'start' | 'end'
// 默认方位
export type Direction =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

// 创建的时候的入参
export interface PopperNewParams {
  bindDom: HTMLElement // 被绑定的元素
  tooltipDom: HTMLElement // 浮动元素
  zIndex?: number
  direction?: Direction
  offset?: number
  // // 元素是否会跟随消失
  // // true指元素移动到浏览器窗口之外会跟随移动出去
  // // false 当绑定元素移动到浏览器外，浮动元素依旧存在，将在浏览器边缘始终存在
  // followDisappear?: boolean
  updateDirection?: boolean
}
export interface PopperParams extends PopperNewParams {
  direction: Direction
  offset: number
  followDisappear: boolean
}
