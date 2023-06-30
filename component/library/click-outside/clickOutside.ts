import { CPDEnum, InParams } from './types'
// 点击在文件外部
export default class ClickOutside {
  uninstall: () => void
  params: InParams
  constructor(params: InParams) {
    this.params = params
    this.start()
  }
  start() {
    // // 按下
    // document.addEventListener('mousedown', () => {}, false)
    // // 释放
    // document.addEventListener('mouseup', () => {}, false)
    const clickPage = (e: MouseEvent) => {
      const cpd = this.cpd(e.target)
      const callback = this.params.callback
      let cpdEnum: CPDEnum
      switch (cpd) {
        case 20: {
          cpdEnum = 'out'
          break
        }
        case 0: {
          cpdEnum = 'self'
          break
        }
        default: {
          cpdEnum = 'out'
        }
      }
      if (callback) callback(cpdEnum)
    }
    document.addEventListener('click', clickPage, false)

    this.uninstall = () => {
      document.removeEventListener('click', clickPage, false)
    }
  }
  /*
compareDocumentPosition
0: 自身
1：没有关系，这两个节点不属于同一个文档。
2： 第一节点（P1）位于第二个节点后（P2）。
4：第一节点（P1）定位在第二节点（P2）前。
8： 第一节点（P1）位于第二节点内（P2）。
16： 第二节点（P2）位于第一节点内（P1）。
32: 没有关系的，或是两个节点在同一元素的两个属性。
20：意味着在 p2 在 p1 内部（16），并且 p1 在 p2 之前（4）
注意： 回值可以是值的组合。例如，返回 20 意味着在 p2 在 p1 内部（16），并且 p1 在 p2 之前（4）。
*/
  cpd(inDom: HTMLElement) {
    return this.params.bindDom.compareDocumentPosition(inDom)
  }
}
