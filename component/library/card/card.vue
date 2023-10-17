<template>
  <div :class="className(baseName)">
    <div :class="className([baseName, 'header'])">
      <span :class="className([baseName, 'header', 'title'])">{{ title }}</span>
    </div>
    <div :class="className([baseName, 'body'])">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
const baseName = 'card'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  title?: string
}
withDefaults(defineProps<Props>(), {})
</script>

<style scoped></style>
