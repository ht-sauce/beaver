import type { App } from 'vue'
import button from './button.vue'

export { button }
export default {
  install(app: App) {
    app.use(button.name, button)
  },
}
