// 自研浮框
import { PopperNewParams, PopperParams } from './types'
import { toPx } from './tool'

class Popper {
  params: PopperParams
  // 卸载
  uninstall() {}
  constructor(params: PopperNewParams) {
    // 一定有默认值，进行默认值处理
    params.direction = params.direction ?? 'bottom'
    // 默认跟随消失
    params.followDisappear = params.followDisappear ?? true
    params.offset = params.offset ?? 12

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
  // 更新位置
  upPosition() {
    const { direction, tooltipDom } = this.params
    const { bindDomRect, tooltipDomRect } = this.getRect()
    const offset = this.params.offset
    if (direction.indexOf('bottom') !== -1) {
      tooltipDom.style.top = toPx(bindDomRect.top + bindDomRect.height + offset)
    }
    if (direction.indexOf('top') !== -1) {
      tooltipDom.style.top = toPx(bindDomRect.top - bindDomRect.height - offset)
    }
    if (direction.indexOf('left') !== -1) {
      // tooltipDom.style.top = toPx(bindDomRect.top + bindDomRect.height + offset)
    }
    if (direction.indexOf('right') !== -1) {
      // tooltipDom.style.top = toPx(bindDomRect.top + bindDomRect.height + offset)
    }
    switch (direction) {
      case 'bottom': {
        tooltipDom.style.left = toPx(bindDomRect.left - (tooltipDomRect.width - bindDomRect.width) / 2)
        break
      }
      case 'bottom-start': {
        tooltipDom.style.left = toPx(bindDomRect.left)
        break
      }
      case 'bottom-end': {
        tooltipDom.style.left = toPx(bindDomRect.right - tooltipDomRect.width)
        break
      }
      case 'top': {
        break
      }
      case 'top-start': {
        break
      }
      case 'top-end': {
        break
      }
      case 'left': {
        break
      }
      case 'left-start': {
        break
      }
      case 'left-end': {
        break
      }
      case 'right': {
        break
      }
      case 'right-start': {
        break
      }
      case 'right-end': {
        break
      }
    }
  }
  // window窗口变化监听
  onResize() {
    this.upPosition()
  }
}

export default Popper
