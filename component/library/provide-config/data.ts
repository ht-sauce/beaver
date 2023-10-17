import { Sizes, Types } from '../types'
import { inject, ref } from 'vue'

export type Props = {
  type?: Types
  zIndex?: number // 默认值2000
  locale?: Record<string, string>
  namespace?: string // 全局组件类名称前缀
  size?: Sizes // 全局组件大小
}
export const configProvideProps = Symbol('configProvideProps')
//  注入配置，其他组件可以获取到配置
export function useConfig(): Props {
  const configInject: () => Props = inject(configProvideProps, (): Props => {
    return {
      type: null,
      namespace: 'be',
      size: 'default',
    }
  })
  return configInject()
}

export const ZIndex = ref(2000)
// z-index + 1，弹窗等处理时候调用
export function ZIndexAdd1() {
  ZIndex.value = ZIndex.value + 1
}
