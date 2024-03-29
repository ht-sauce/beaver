import type { InParams, VmoveCallData } from './types'

export default class Move {
  params: InParams
  uninstall: () => void
  constructor(params: InParams) {
    const {
      bindDom,
      x,
      y,
      deviationX,
      deviationY,
      moveStart,
      moveStop,
      parentNodeBoundary,
      windowBoundary,
      change,
      onlyY,
      onlyX,
    } = params
    if (!bindDom) {
      console.warn('请绑定需要移动的元素')
      return
    }
    this.params = {
      ...params,
      x: x ?? 0,
      y: y ?? 0,
      onlyY: onlyY ?? true,
      onlyX: onlyX ?? true,
      deviationX: deviationX ?? 0,
      deviationY: deviationY ?? 0,
      parentNodeBoundary: parentNodeBoundary ?? false,
      windowBoundary: windowBoundary ?? false,
      change,
      moveStart,
      moveStop,
    }
    this.eventBind()
  }
  paramsHandler() {
    const { parentNodeBoundary, windowBoundary, bindDom, deviationX, deviationY, onlyX, onlyY, x, y } = this.params

    // dom预先定义
    bindDom.style.position = 'absolute'
    // 父元素设置
    const parentNode = bindDom.parentNode as HTMLElement
    parentNode.style.position = 'relative'

    // 父元素宽高
    const pw = windowBoundary ? window.innerWidth - 1 : parentNode.offsetWidth + deviationX
    const ph = windowBoundary ? window.innerHeight - 1 : parentNode.offsetHeight + deviationY
    // 本身宽高
    const sw = bindDom.offsetWidth
    const sh = bindDom.offsetHeight // 在控制父边界情况下避免元素超出范围
    // 计算得到最大移动距离
    const maxW = pw - sw //+ bindDom.customOffsetLeft
    const maxH = ph - sh //+ bindDom.customOffsetHeight
    const minW = -deviationX
    const minH = -deviationY

    if (!bindDom.isMove) {
      bindDom.style.transition = 'top 0.3s, left 0.3s'
      const left = (parentNodeBoundary ? (x / 100) * maxW : x) + 'px'
      const top = (parentNodeBoundary ? (y / 100) * maxH : y) + 'px'
      if (onlyX) bindDom.style.left = left
      if (onlyY) bindDom.style.top = top
    }
    return {
      pw,
      ph,
      sw,
      sh,
      maxW,
      maxH,
      minW,
      minH,
      parentNode,
    }
  }

  // 事件绑定
  eventBind() {
    const { bindDom, change, moveStart, moveStop, onlyX, onlyY, windowBoundary, parentNodeBoundary } = this.params
    const { sw, sh, maxW, maxH, minW, minH } = this.paramsHandler()
    bindDom.style.cursor = 'move'
    const onmousedown = function (e) {
      // 鼠标经过iframe会失去焦点
      if (document.querySelector('iframe')) {
        document.querySelector('iframe').style['pointer-events'] = 'none'
      }

      // 阻止默认事件，避免元素选中
      e.preventDefault()
      bindDom.isMove = true

      //算出鼠标当前相对元素的位置
      const disX = e.x - bindDom.offsetLeft
      const disY = e.y - bindDom.offsetTop

      let left = 0,
        top = 0,
        // 相对于父元素百分比
        percentX = 0,
        percentY = 0
      if (moveStart) moveStart()

      const onmousemove = function (e2) {
        bindDom.style.transition = ''
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        left = e2.clientX - disX
        top = e2.clientY - disY
        // 当传入true代表控制边界
        if (parentNodeBoundary || windowBoundary) {
          left = left > maxW ? maxW : left < minW ? minW : left
          top = top > maxH ? maxH : top < minH ? minH : top
          // 计算移动百分比
          percentX = Number(((left / maxW) * 100).toFixed(0))
          percentX = isNaN(percentX) ? 0 : percentX
          percentY = Number(((top / maxH) * 100).toFixed(0))
          percentY = isNaN(percentY) ? 0 : percentY
        }
        //移动当前元素
        onlyX && (bindDom.style.left = left + 'px')
        onlyY && (bindDom.style.top = top + 'px')

        if (change)
          change({
            left,
            top,
            percentX,
            percentY,
            minX: minW,
            minY: minH,
            maxX: maxW,
            maxY: maxH,
            selfWidth: sw,
            selfHeight: sh,
          } as VmoveCallData)
      }
      const onmouseup = function () {
        // 释放恢复正常
        if (document.querySelector('iframe')) {
          document.querySelector('iframe').style['pointer-events'] = 'auto'
        }

        //鼠标弹起来的时候不再移动
        bindDom.isMove = false
        // bindDom.style.cursor = 'pointer'
        document.removeEventListener('mousemove', onmousemove, false)
        document.removeEventListener('mouseup', onmouseup, false)
        if (moveStop)
          moveStop({
            left,
            top,
            percentX,
            percentY,
            minX: minW,
            minY: minH,
            maxX: maxW,
            maxY: maxH,
            selfWidth: sw,
            selfHeight: sh,
          } as VmoveCallData)
      }

      document.addEventListener('mousemove', onmousemove, false)
      document.addEventListener('mouseup', onmouseup, false)
    }
    bindDom.addEventListener('mousedown', onmousedown, false)

    this.uninstall = function () {
      bindDom.removeEventListener('mousedown', onmousedown, false)
    }
  }
}
