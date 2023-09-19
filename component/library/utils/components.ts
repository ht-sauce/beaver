import { config } from '@beaver-ui/theme'
import { firstUppercase } from '@beaver-ui/utils/string'
export function componentName(componentName: string) {
  return firstUppercase(config.namespace) + firstUppercase(componentName)
}
