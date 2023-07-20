export function toPx(num: number) {
  return num + 'px'
}
export function removePx(px: string) {
  return Number(px.replace(/px/gi, ''))
}
