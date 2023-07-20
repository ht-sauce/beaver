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
  updateDirection?: boolean
  arrow?: boolean // 是否展示箭头
  arrowClassName?: string // 箭头class名称
  arrowOffset?: number // 箭头偏移值
}
export interface PopperParams extends PopperNewParams {
  direction: Direction
  offset: number
  followDisappear: boolean
}
