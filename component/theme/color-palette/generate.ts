import { generate } from '@ant-design/colors'
import { getCssVar } from '../config'

// 主题颜色生成
const mainColor = 'main-color'

function generateCssVar(cssVarName: string = 'main-color', color: string) {
  // css样式字符串
  const styleStr =
    generate(color, { theme: 'default' })
      .map((color, index: number) => {
        return `${getCssVar(cssVarName + index)}: ${color}`
      })
      .join(';\n') + ';'
  return styleStr
}

document.documentElement.setAttribute('style', generateCssVar(mainColor, '#faad14'))
