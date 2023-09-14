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
    fontColor: [
      { cssVar: 'font-main', tips: '全局的所有文字基本色' },
      { cssVar: 'font-title', tips: '文字标题颜色' },
      { cssVar: 'font-secondary', tips: '文字次要颜色，可以用于提示文字' },
      { cssVar: 'font-disable', tips: '禁用文字颜色' },
    ],
    background: [{ cssVar: 'background', tips: '整体页面背景色' }],
    fontSize: [
      { cssVar: 'h1', tips: '最大大标题，唯一' },
      { cssVar: 'h2', tips: '文章导航标题' },
      { cssVar: 'h3', tips: '常规标题' },
      { cssVar: 'h4', tips: '次级标题，弹窗标题，tab标题等' },
      { cssVar: 'h5', tips: '常规主要展示文字，基准文字' },
      { cssVar: 'h6', tips: '提示文字' },
    ],
    fontWeight: [
      { cssVar: 'bold-main', tips: '全局基本文字，字体粗细' },
      { cssVar: 'bold-title', tips: '标题类的加粗文字' },
    ],
    shadow: [{ cssVar: 'shadow1', tips: '基本上都这个阴影吧' }],
    margin: [
      { cssVar: 'margin0', tips: '大块元素间距' },
      { cssVar: 'margin1', tips: '大块内部小块间距' },
      { cssVar: 'margin2', tips: '文字块间距' },
      { cssVar: 'margin3', tips: '文字间间距' },
    ],
    padding: [
      { cssVar: 'padding0', tips: '页面整体间距或大块元素间距' },
      { cssVar: 'padding1', tips: '大块内部小块' },
      { cssVar: 'padding2', tips: '文字块间距' },
    ],
    border: [{ cssVar: 'border', tips: '所有边框都这个' }],
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
