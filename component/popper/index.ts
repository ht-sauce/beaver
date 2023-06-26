// 自研浮框
import { Direction, PopperNewParams, PopperParams, Position, UpDown } from './types'
import { toPx } from './tool'

class Popper {
  params: PopperParams
  // 卸载
  uninstall() {}
  constructor(params: PopperNewParams) {
    // 一定有默认值，进行默认值处理
    params.direction = params.direction ?? 'bottom'
    params.offset = params.offset ?? 12
    params.updateDirection = params.updateDirection ?? true
    params.arrow = params.arrow ?? true // 默认需要三角箭头

    this.params = params as PopperParams

    // console.info('传入参数', params)
    this.initialization()
  }
  initialization() {
    // 浏览器事件监听处理
    const reSize = () => {
      this.upPosition()
    }
    window.addEventListener('resize', reSize, false)
    window.addEventListener('scroll', reSize, false)
    // 真正的卸载
    this.uninstall = () => {
      window.removeEventListener('resize', reSize, false)
      window.removeEventListener('scroll', reSize, false)
    }

    // 设置浮动元素的定位为绝对定位
    const tooltipDom = this.params.tooltipDom
    tooltipDom.style.position = 'fixed'
    tooltipDom.style.zIndex = this.params.zIndex ? String(this.params.zIndex) : ''

    // 第一次也许不是最合适的位置，初始加载两次
    this.upPosition()
    this.upPosition()
  }
  // 获取元素位置
  // getBoundingClientRect
  getRect() {
    // https://blog.csdn.net/m0_52009348/article/details/119816872
    // top: 元素上边距离页面上边的距离
    // left: 元素右边距离页面左边的距离
    // right: 元素右边距离页面左边的距离
    // bottom: 元素下边距离页面上边的距离
    // width: 元素宽度
    // height: 元素高度
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      bindDomRect: this.params.bindDom.getBoundingClientRect(),
      tooltipDomRect: this.params.tooltipDom.getBoundingClientRect(),
    }
  }
  // 方向时间间隔，
  directionTimeInterval: number[] = [0, 0]
  setDirection(direction: Direction) {
    // 记录最近两次变化时间间隔
    this.directionTimeInterval.splice(0, 1)
    this.directionTimeInterval.push(new Date().getTime())

    const renderingTime = this.directionTimeInterval[1] - this.directionTimeInterval[0]
    // 方向变化时间间隔控制在500毫秒以下
    if (renderingTime < 500) return

    this.params.direction = direction
  }
  // 动态调整浮框位置
  updateDirection() {
    const { tooltipDomRect, innerHeight, innerWidth } = this.getRect()
    const { top, left, width, height } = tooltipDomRect
    // 多余减去18，作为滚动条的宽度
    const scrollBarW = 18
    const spacingRight = innerWidth - left - width - scrollBarW
    const spacingBottom = innerHeight - top - height - scrollBarW
    if (top < 0) {
      this.setDirection('bottom')
      return
    }
    if (left < 0) {
      this.setDirection('right')
      return
    }
    if (spacingRight < 0) {
      this.setDirection('left')
      return
    }
    if (spacingBottom < 0) {
      this.setDirection('top')
      return
    }
  }
  // 更新位置
  upPosition() {
    this.params.updateDirection && this.updateDirection()

    const { direction, tooltipDom } = this.params

    const { bindDomRect, tooltipDomRect } = this.getRect()
    const offset = this.params.offset
    const [position, upDown] = direction.split('-') as [Position, UpDown]
    if (position === 'bottom') {
      tooltipDom.style.top = toPx(bindDomRect.top + bindDomRect.height + offset)
    }
    if (position === 'top') {
      tooltipDom.style.top = toPx(bindDomRect.top - tooltipDomRect.height - offset)
    }
    if (position === 'bottom' || position === 'top') {
      if (!upDown) {
        tooltipDom.style.left = toPx(bindDomRect.left - (tooltipDomRect.width - bindDomRect.width) / 2)
      }
      if (upDown === 'start') {
        tooltipDom.style.left = toPx(bindDomRect.left)
      }
      if (upDown === 'end') {
        tooltipDom.style.left = toPx(bindDomRect.right - tooltipDomRect.width)
      }
    }

    if (position === 'left') {
      tooltipDom.style.left = toPx(bindDomRect.left - tooltipDomRect.width - offset)
    }
    if (position === 'right') {
      tooltipDom.style.left = toPx(bindDomRect.left + bindDomRect.width + offset)
    }
    if (position === 'left' || position === 'right') {
      if (!upDown) {
        tooltipDom.style.top = toPx(bindDomRect.top - (tooltipDomRect.height - bindDomRect.height) / 2)
      }
      if (upDown === 'start') {
        tooltipDom.style.top = toPx(bindDomRect.top)
      }
      if (upDown === 'end') {
        tooltipDom.style.top = toPx(bindDomRect.top - (tooltipDomRect.height - bindDomRect.height))
      }
    }
  }
  // 设置三角形
  setArrow() {}
}

export default Popper
