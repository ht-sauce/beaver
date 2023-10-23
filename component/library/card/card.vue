<template>
  <div :class="className(baseName)">
    <div v-if="isHeader" :class="className([baseName, 'header'])">
      <slot name="header">
        <span :class="className([baseName, 'header', 'title'])">{{ title }}</span>
        <be-button>展开</be-button>
        <be-button>收起</be-button>
      </slot>
    </div>
    <div :class="[className([baseName, 'body']), isHeader ? className([baseName, 'is', 'header']) : '']">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { computed, useSlots } from 'vue'
import { BeButton } from '../button'

const baseName = 'card'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  title?: string
}
const props = withDefaults(defineProps<Props>(), {})

const slots = useSlots()

const isHeader = computed(() => props.title || slots.header)
</script>

<style scoped></style>
