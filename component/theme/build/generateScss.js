import { writeFile } from 'fs/promises'
import { colorPalette } from './css-var-config.js'
import { getPrefix } from '../config.js'
import { join } from 'path'

function getPath(path) {
  // const __filenameNew = fileURLToPath(import.meta.url)
  return join(process.cwd(), path)
}

const cssVar = []

for (const key in colorPalette) {
  cssVar.push(`--${getPrefix() + key}: ${colorPalette[key]};`)
}

const colorPaletteFile = `:root {
${cssVar.join('\n')}
}
`
// console.log(colorPaletteFile)
await writeFile(getPath('./color-palette/color-palette.scss'), colorPaletteFile)
