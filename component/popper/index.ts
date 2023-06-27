// 自研浮框
import { Direction, PopperNewParams, PopperParams, Position, UpDown } from './types'
import { removePx, toPx } from './tool'

class Popper {
  params: PopperParams
  arrowDom: HTMLElement | null
  // 卸载
  uninstall() {}
  constructor(params: PopperNewParams) {
    // 一定有默认值，进行默认值处理
    params.direction = params.direction ?? 'bottom'
    params.offset = params.offset ?? 12
    params.updateDirection = params.updateDirection ?? true
    params.arrow = params.arrow ?? true // 默认需要三角箭头
    params.arrowOffset = Number(params.arrowOffset ?? 0)

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
      this.removeArrow()
      window.removeEventListener('resize', reSize, false)
      window.removeEventListener('scroll', reSize, false)
    }

    // 设置浮动元素的定位为绝对定位
    const tooltipDom = this.params.tooltipDom
    tooltipDom.style.position = 'fixed'
    tooltipDom.style.zIndex = this.params.zIndex ? String(this.params.zIndex) : ''
    if (this.params.arrow) {
      this.setArrow()
    }
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
      // arrowDomRect: this.arrowDom?.getBoundingClientRect(),
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
  // 简化处理方向
  directionHandle() {
    const [position, upDown] = this.params.direction.split('-') as [Position, UpDown]
    return {
      direction: this.params.direction,
      position,
      upDown,
    }
  }
  // 更新位置
  upPosition() {
    this.params.updateDirection && this.updateDirection()

    const { tooltipDom } = this.params

    const { bindDomRect, tooltipDomRect } = this.getRect()
    const offset = this.params.offset

    const { position, upDown } = this.directionHandle()
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

    // console.log(this.arrowDom, 222)
    this.arrowDom && this.upPositionArrow()
  }
  // 设置三角形
  setArrow() {
    this.removeArrow()
    const arrow = document.createElement('div')
    if (this.params.arrowClassName) {
      arrow.setAttribute('class', this.params.arrowClassName)
    }
    arrow.setAttribute(
      'style',
      `position: fixed;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px;
  border-color: transparent transparent #ffffff #ffffff;
  box-shadow: -2px 2px 3px 0px rgba(0, 0, 0, 0.1);`,
    )
    arrow.style.zIndex = this.params.zIndex ? String(this.params.zIndex) : ''
    this.arrowDom = arrow
    document.body.appendChild(arrow)
  }
  removeArrow() {
    if (this.arrowDom) document.body.removeChild(this.arrowDom)
  }
  upPositionArrow() {
    const arrowDom = this.arrowDom
    const { position } = this.directionHandle()
    const { arrowOffset } = this.params

    const { bindDomRect, tooltipDomRect } = this.getRect()
    const borderWidth = removePx(arrowDom.style.borderWidth)
    switch (position) {
      case 'top': {
        arrowDom.style.transform = 'rotate(-45deg)'
        arrowDom.style.top = toPx(tooltipDomRect.top + tooltipDomRect.height - borderWidth - 1)
        arrowDom.style.left = toPx(bindDomRect.left + bindDomRect.width / 2 - borderWidth - 1 - arrowOffset)
        break
      }
      case 'bottom': {
        arrowDom.style.transform = 'rotate(135deg)'
        arrowDom.style.top = toPx(tooltipDomRect.top - borderWidth + 1)
        arrowDom.style.left = toPx(bindDomRect.left + bindDomRect.width / 2 - borderWidth - arrowOffset)
        break
      }
      case 'left': {
        arrowDom.style.transform = 'rotate(-135deg)'
        arrowDom.style.top = toPx(bindDomRect.top + bindDomRect.height / 2 - borderWidth - arrowOffset)
        arrowDom.style.left = toPx(tooltipDomRect.left + tooltipDomRect.width - borderWidth - 1)
        break
      }
      case 'right': {
        arrowDom.style.transform = 'rotate(45deg)'
        arrowDom.style.top = toPx(bindDomRect.top + bindDomRect.height / 2 - borderWidth - arrowOffset)
        arrowDom.style.left = toPx(tooltipDomRect.left - borderWidth + 1)
        break
      }
    }
  }
}

export default Popper
