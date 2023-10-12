import BeIcon from './icon.vue'
import SvgList from './svg-list'
import { withInstall } from '@beaver-ui/utils/register'

export { BeIcon, SvgList }
const install = withInstall([BeIcon])
install.SvgList = SvgList
export default install
