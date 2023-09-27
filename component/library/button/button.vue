<template>
  <button :class="[className('button'), classType]">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { Types } from '../types'
import { computed } from 'vue'
const baseName = 'button'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  type?: Types
}
const props = withDefaults(defineProps<Props>(), {})

const classType = computed(() => {
  let typeName = ''
  switch (props.type) {
    case 'primary': {
      typeName = 'primary'
      break
    }
    case 'danger': {
      typeName = 'danger'
      break
    }
    case 'warning': {
      typeName = 'warning'
      break
    }
    case 'success': {
      typeName = 'success'
      break
    }
  }
  if (typeName) {
    return className([baseName, typeName])
  }
  return ''
})
</script>

<style scoped></style>
