import { config } from '@beaver-ui/theme'
import { firstUppercase } from './string'
import { isArray } from './validate'
export function componentName(componentName: string) {
  return firstUppercase(config.namespace) + firstUppercase(componentName)
}
export function className(className: string | string[]) {
  let name = className
  if (isArray(className)) {
    name = className.join(config.connector)
  }
  return config.namespace + config.connector + name
}
