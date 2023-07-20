import type { App } from 'vue'
import DhtCopy from './directive'
import Copy from './copy'
import { getPrefix } from '@beaver-ui/theme/config'

export default {
  install(app: App) {
    app.directive(getPrefix() + 'copy', DhtCopy)
  },
}
export { Copy, DhtCopy }
