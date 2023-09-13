// import { Theme } from 'vitepress'
import '@beaver-ui/theme'
import DefaultTheme from 'vitepress/theme'
import './rest.scss'

// 相当于页面main.js
export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    // ctx.app.component('MyGlobalComponent' /* ... */)
  },
}
