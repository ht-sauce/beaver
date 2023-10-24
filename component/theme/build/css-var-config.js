import tinycolor from 'tinycolor2'
import { blue } from '@ant-design/colors'

// 绿色
const success = '#52c41a'
// 黄色
const warning = '#faad14'
// 红色
const error = '#f5222d'
// 灰色
const info = '#bfbfbf'
// 黑色
// const black = '#000000'
// 白色
const white = '#ffffff'

export const colorPalette = {
  // 主要色彩
  'main-color0': blue[0],
  'main-color1': blue[1],
  'main-color2': blue[2],
  'main-color3': blue[3],
  'main-color4': blue[4],
  'main-color5': blue.primary,
  'main-color6': blue[6],
  'main-color7': blue[7],
  'main-color8': blue[8],
  'main-color9': blue[9],

  'font-family':
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans','sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
  // 白色
  white: white,
  // 绿色
  success: success, // 相当于5档颜色
  // 黄色
  warning: warning, // 相当于5档颜色
  // 红色
  error: error,
  // 灰色
  info: info,
  // 字體顏色
  'font-main': tinycolor(white).darken(88), // 主要展示文字颜色
  'font-title': tinycolor(white).darken(88), // 标题
  'font-secondary': tinycolor(white).darken(45),
  'font-disable': tinycolor(white).darken(25), // 禁用
  // 背景颜色
  background: 'darken($white,4%)',
  // 字体大小
  h1: '24px', // 页面唯一标题
  h2: '20px', // 文章导航标题
  h3: '18px', // 常规标题
  h4: '16px', // 次级标题，弹窗标题，tab标题等
  h5: '14px', // 常规主要展示文字
  h6: '12px', // 提示文字
  // 字重
  'bold-main': 400,
  'bold-title': 600,
  // 阴影
  shadow1: '0 0px 6px 0px rgba(0,0,0,0.12)',
  // 间距
  margin0: '16px', // 块元素间距
  margin1: '12px', // label块间距
  margin2: '8px', // 字体块间距
  margin3: '4px',
  // 内间距
  padding0: '16px',
  padding1: '12px',
  padding2: '8px',
  // 边框
  border: tinycolor(white).darken(15),
  // 圆角
  radius: '4px',
}
