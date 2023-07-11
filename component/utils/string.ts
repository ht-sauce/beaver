// 字符串首字母大写
export function FirstUppercase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}
