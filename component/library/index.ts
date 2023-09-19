import type { App } from 'vue'
import packageJson from './package.json'
/*所有功能统一导出*/

// 工具功能导出
export * from './move'
export * from './copy'
export * from './popper'

// 组件功能导出
import { button } from './button'

const componentsList = [button]
// const directiveList = []

export default {
  version: packageJson.version,
  install(app: App) {
    componentsList.forEach((component) => {
      app.use(component.name, component)
    })
    // directiveList.forEach((directive) => {
    //   app.directive(directive.name, directive.directive)
    // })
  },
}
