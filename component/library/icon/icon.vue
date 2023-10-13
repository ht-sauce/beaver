<template>
  <i :class="className(baseName)">
    <slot />
  </i>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
const baseName = 'icon'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  icon?: string
}
withDefaults(defineProps<Props>(), {})
</script>

<style scoped></style>
