// import { Theme } from 'vitepress'
import '@beaver-ui/theme'
import '@beaver-ui/theme/index.scss'

import DefaultTheme from 'vitepress/theme'
import './rest.scss'

import globalsComponents from '../../components/index'

import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

// 相当于页面main.js
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(hljsVuePlugin)
    globalsComponents.forEach((component) => {
      app.component(component.name, component)
    })
  },
}
