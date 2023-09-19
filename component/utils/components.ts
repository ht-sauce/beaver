import { config } from '@beaver-ui/theme'
import { firstUppercase } from './string'
export function componentName(componentName: string) {
  return firstUppercase(config.namespace) + firstUppercase(componentName)
}
