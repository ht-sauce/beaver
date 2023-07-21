// 监听子页面加载和关闭
export function listenChildWindow(url: string, callback = (isLoad: boolean) => {}) {
  const page: Window = window.open(url)
  let timer: Window.Timer = null
  timer = setInterval(() => {
    // closed属性为true表示页面已经关闭
    if (page.closed) {
      clearInterval(timer)
      callback(true)
    }
  }, 1000)
  return page
}
