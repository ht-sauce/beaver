<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { componentName } from '@beaver-ui/utils/components'
import { setNamespace } from '@beaver-ui/theme/config'
import { provide, watch } from 'vue'

import type { Props } from './data'
import { configProvideProps, ZIndex } from './data'

const baseName = 'provideConfig'
defineOptions({
  name: componentName(baseName),
})

const props = withDefaults(defineProps<Props>(), {
  zIndex: 2000, // 初始zIndex
  namespace: 'be',
  size: 'default',
})

provide(configProvideProps, () => props)

// 初始化z-index值
watch(
  () => [props.zIndex, props.namespace],
  (zIndex, namespace) => {
    ZIndex.value = zIndex
    setNamespace(namespace as string)
  },
  { immediate: true },
)
</script>
