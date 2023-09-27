<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { componentName } from '@beaver-ui/utils/components'

import { provide } from 'vue'

import type { Props } from './data'
import { configProvideProps } from './data'

const baseName = 'provideConfig'
defineOptions({
  name: componentName(baseName),
})

const props = withDefaults(defineProps<Props>(), {})

provide(configProvideProps, () => props)
</script>
