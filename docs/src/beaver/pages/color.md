<script setup>
    import PageColor  from '../components/color/color.vue'
</script>

# 主题

## 所有css变量
<PageColor />

## 内在支持函数
```scss
@use '@beaver-ui/theme/vars/function.scss' as *;

GetVar('变量名称，不要前缀be-')
```
```javascript
import { getCssVar } from '@beaver-ui/theme/config'

getCssVar('变量名称，不要前缀be-')
```
