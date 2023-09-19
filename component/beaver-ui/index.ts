import { withInstall } from '@beaver-ui/utils/register'

export * from '@beaver-ui/library'

// 默认全部组件注册
import componentsDefault from './componentsDefault'

export default withInstall(componentsDefault)
