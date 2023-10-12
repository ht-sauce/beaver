<template>
  <i v-if="!svgCode" :class="className(baseName)">
    <slot />
  </i>
  <i v-else :class="className(baseName)" v-html="svgCode"></i>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { watch, ref } from 'vue'
const baseName = 'icon'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  icon?: string
}
const props = withDefaults(defineProps<Props>(), {})

const svgCode = ref('')
watch(
  () => props.icon,
  (icon) => {
    if (icon) getSvgCode(icon)
    else {
      svgCode.value = ''
    }
  },
  { immediate: true },
)

async function getSvgCode(icon: string) {
  const code = await import(/* @vite-ignore */ './svg/' + icon + '.svg?raw')
  svgCode.value = code.default
}
</script>

<style scoped></style>
