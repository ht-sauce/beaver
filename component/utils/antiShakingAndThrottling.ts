//防抖函数：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。
//原理：利用js闭包原理。特点在于函数其实需要在刚完成时需要被使用，形成变量赋值给另一个变量，由被赋值的变量进行使用。
/*
 * 传入参数：
 * 1：回调函数
 * 2：延迟时间，默认500,
 * 3：是否立即执行
 * */

type Callback = (...parms: any) => void
export const antiShake = function (callback: Callback, wait = 500, immediate = true): Callback {
  //定义计时器 ID
  let timeout: number | null
  const debounced = function () {
    // @ts-ignore
    const self = this
    //如下为新写法，等同于if为true则执行，类似写法还有三元表达式
    timeout && clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      /*原理：如果不用apply的话会导致函数本身的参数传递无法传递，并且this对象指向不正确
       * apply解析：
       * 这里apply劫持了callback函数
       * 本身retrun function 所对应的对象才是本身的vue对象，但是处于回调中会获取不到。所以
       * 用apply把回调函数的this替换为self，参数（arguments）也正常传递过去
       * */
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      if (callNow) callback.apply(self, arguments)
      timeout = window.setTimeout(
        () => {
          timeout = null
        }, //见注解
        wait,
      )
    } else {
      timeout = window.setTimeout(() => {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        callback.apply(self, arguments)
      }, wait)
    }
  }
  //取消执行，需要把immediate才有意义
  debounced.cancel = function () {
    clearTimeout(timeout as number)
    timeout = null
  }
  return debounced
}
// 注解：作为开关变量，表明一个周期结束。使得 callNow 为 true，目标函数可以在新的周期里被触发时被执行
// timeout 作为闭包引用的上层函数的变量，是不会自动回收的。手动将其设置为 null ，让它脱离执行环境，一边垃圾收集器下次运行是将其回收。

/*函数节流
定义：触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。*/
/*参数：
1、回调函数
2、间隔时间
3、设置 options 作为第三个参数，然后根据传的值判断到底哪种效果，约定:
leading：false 表示禁用第一次执行
trailing: false 表示禁用停止触发的回调*/
export const throttle = function (
  func: Callback,
  wait = 500,
  options = {} as { leading: boolean; trailing: boolean },
): Callback {
  let time: number | null, context: any, args: any
  let previous = 0
  if (!options) options = {} as { leading: boolean; trailing: boolean }

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    time = null
    func.apply(context, args)
    if (!time) context = args = null
  }

  const throttled = function () {
    const now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    // @ts-ignore
    context = this
    // eslint-disable-next-line prefer-rest-params
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (time) {
        clearTimeout(time)
        time = null
      }
      previous = now
      func.apply(context, args)
      if (!time) context = args = null
    } else if (!time && options.trailing !== false) {
      time = window.setTimeout(later, remaining)
    }
  }
  throttled.cancel = function () {
    clearTimeout(time as number)
    time = null
    previous = 0
  }
  return throttled
}
