<template>
  <button :class="classList">
    <span
      v-if="icon"
      :class="[className([baseName, 'icon']), $slots.default ? className([baseName, 'is', 'margin']) : '']"
    >
      <be-icon>
        <component :is="icon"></component>
      </be-icon>
    </span>

    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { BeIcon } from '../icon'
import { Types } from '../types'
import { computed, DefineComponent } from 'vue'
import { useConfig } from '../provide-config/data'
const baseName = 'button'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  type?: Types
  circular?: boolean
  icon?: DefineComponent
  link?: boolean
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
  if (props.link) {
    classArr.push(className([baseName, 'link']))
  }
  return classArr
})
</script>
