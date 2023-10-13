export function firstUppercase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
// vue文件名称处理
export function vueFileName(fileName) {
  fileName = fileName.replace(/.svg/g, '')
  // return `'${li.replace(/.svg/g, '')}'`
  fileName = fileName
    .split('-')
    .map((item) => firstUppercase(item))
    .join('')
  fileName = firstUppercase(fileName)
  // fileName = `'${fileName}'`
  return fileName
}
