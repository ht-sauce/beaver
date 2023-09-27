<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { componentName } from '@beaver-ui/utils/components'
import { Types } from '../types'

const baseName = 'provideConfig'
defineOptions({
  name: componentName(baseName),
})

type Props = {
  type?: Types
}
const props = withDefaults(defineProps<Props>(), {})
</script>
