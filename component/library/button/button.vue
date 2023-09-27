<template>
  <button :class="classList">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { Types } from '../types'
import { computed } from 'vue'
import { useConfig } from '../provide-config/data'
const baseName = 'button'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  type?: Types
  circular?: boolean
}
const props = withDefaults(defineProps<Props>(), {})
const config = useConfig()
const finalType = computed(() => config.type || props.type)

const classList = computed(() => {
  const classArr = [className('button')]
  if (finalType.value) {
    classArr.push(className([baseName, finalType.value]))
  }
  if (props.circular) {
    classArr.push(className([baseName, 'circular']))
  }
  return classArr
})
</script>
