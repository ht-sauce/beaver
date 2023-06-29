export interface InParams {
  bindDom: HTMLElement // 需要移动的元素
  // 是否只在父元素范围内移动，和pwin参数互斥，不可同时使用
  parentNodeBoundary?: boolean // 父节点边界
  // x,y轴移动百分比，在boundary为false或者pwin参数下传入为像素值
  x?: number
  y?: number
  // 仅x，y移动
  onlyX: boolean
  onlyY: boolean
  // 是否只在window.innerWidth和window.innerHeight范围内移动
  // 和boundary参数互斥，不可同时使用
  windowBoundary?: boolean
  // x轴偏量值，传入正数则范围扩大，负数范围变小，注意调整的px值
  deviationX?: number
  // y轴偏量值，传入正数则范围扩大，负数范围变小，注意调整的px值
  deviationY?: number
  // 移动中
  change?: (args: VmoveCallData) => void
  // 开始移动
  moveStart?: (args: VmoveCallData) => void
  // 移动结束
  moveStop?: (args: VmoveCallData) => void
}
export interface HTMLElementCopy extends HTMLElement {
  isMove: boolean
}
// 回调函数返回值
export interface VmoveCallData {
  left: number // 移动位置
  top: number
  percentX: number // 相对于父元素百分比
  percentY: number
  minX: number // 最小移动位置
  minY: number
  maxX: number // 最大移动位置
  maxY: number
  selfWidth: number // 元素本身宽高
  selfHeight: number
}
