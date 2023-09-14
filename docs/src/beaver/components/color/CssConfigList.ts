import { getCssVar } from '@beaver-ui/theme'

function getCssVarVal(cssVar: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar)
}

type CssConfigItem = {
  cssVar: string
  color?: string
  tips: string
}
type ReAllCssList = { [key: string]: CssConfigItem[] }
export function allCssList(): ReAllCssList {
  const cssList: ReAllCssList = {
    mainColor: [
      { cssVar: 'main-color0', tips: '阴影色等' },
      { cssVar: 'main-color1', tips: '' },
      { cssVar: 'main-color2', tips: '' },
      { cssVar: 'main-color3', tips: '' },
      { cssVar: 'main-color4', tips: '' },
      { cssVar: 'main-color5', tips: '基础颜色，primary' },
      { cssVar: 'main-color6', tips: '' },
      { cssVar: 'main-color7', tips: '' },
      { cssVar: 'main-color8', tips: '' },
      { cssVar: 'main-color9', tips: '' },
    ],
    baseColor: [
      { cssVar: 'black0', tips: '' },
      { cssVar: 'white0', tips: '背景白色等' },
      { cssVar: 'success0', tips: '成功提示' },
      { cssVar: 'warning0', tips: '警告提示' },
      { cssVar: 'error0', tips: '错误提示' },
      { cssVar: 'info0', tips: '常规信息提示' },
    ],
  }
  const reCssList: ReAllCssList = {}
  for (const key in cssList) {
    const list = cssList[key]
    reCssList[key] = list.map((item) => {
      const { tips, cssVar } = item
      return {
        cssVar: getCssVar(cssVar, true),
        color: getCssVarVal(getCssVar(cssVar)),
        tips,
      }
    })
  }
  return reCssList
}
