import type { App, DefineComponent } from 'vue'

export function withInstall(component: DefineComponent[]) {
  return {
    install(app: App) {
      component.forEach((component) => {
        app.component(component.name, component)
      })
    },
  }
}
