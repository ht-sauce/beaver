// 自研浮框
import { PopperNewParams } from './types'

class Popper<Dom extends HTMLElement> {
  params: PopperNewParams<Dom>
  constructor(params: PopperNewParams<Dom>) {
    params.direction = params.direction ? params.direction : 'bottom'

    this.params = params

    console.log(params)
  }
  // 更新位置
  upPosition() {
    //
  }
}

export default Popper
