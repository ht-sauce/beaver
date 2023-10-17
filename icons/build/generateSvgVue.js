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
  const vueNameList = list.map((li) => vueFileName(li))
  const exportIndexJS = vueNameList.map((li) => `'${li}'`).toString()

  const exportVue = vueNameList.map((name) => {
    return `import ${name} from './svg-vue/${name}.vue'`
  }).join(`
`)
  const exportVar = vueNameList.toString()
  const indexJSContent = `export const SvgList =[${exportIndexJS}]
  ${exportVue}
  export { ${exportVar} }
  `
  // export const Addteam = import('./Addteam.vue')
  await writeFile(getPath('index.js'), indexJSContent)
}

getAllSvgPath()
