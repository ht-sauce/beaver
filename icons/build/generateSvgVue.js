import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { vueFileName } from './tool.js'
// import { fileURLToPath } from 'url'

function getPath(path) {
  // const __filenameNew = fileURLToPath(import.meta.url)
  return join(process.cwd(), path)
}

async function getAllSvgPath() {
  const svgPath = getPath('svg')
  const list = await readdir(svgPath)

  // 生成vue文件处理
  for (let i = 0; i < list.length; i++) {
    const name = list[i]
    const content = await readFile(getPath('svg/' + name))
    let text = String(content)
    text = '<template>' + text.replace(/(\<\?xml[^>]*>)|(\<!DOCTYPE[^>]*>)/g, '') + '</template>'

    await writeFile(getPath('svg-vue/' + vueFileName(name) + '.vue'), text)
  }
  // 生成index.js导出文件
  const exportIndexJS = list
    .map((li) => {
      return `'${vueFileName(li)}'`
    })
    .toString()
  const indexJSContent = `export default [
    ${exportIndexJS}
  ]`
  await writeFile(getPath('index.js'), indexJSContent)
}

getAllSvgPath()
