import { Types } from '../types'
import { inject } from 'vue'

export type Props = {
  type?: Types
}
export const configProvideProps = Symbol('configProvideProps')
//  注入配置，其他组件可以获取到配置
export function useConfig(): Props {
  const configInject: () => Props = inject(configProvideProps, (): Props => {
    return {
      type: null,
    }
  })
  return configInject()
}
