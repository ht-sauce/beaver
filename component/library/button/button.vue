<template>
  <button :class="classList" ref="buttonRef" :style="buttonStyle">
    <span
      v-if="icon"
      :class="[className([baseName, 'icon']), $slots.default ? className([baseName, 'is', 'margin']) : '']"
    >
      <slot name="icon">
        <be-icon>
          <component :is="icon"></component>
        </be-icon>
      </slot>
    </span>

    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'
import { BeIcon } from '../icon'
import { Types } from '../types'
import { computed, DefineComponent, onMounted, onUpdated, ref } from 'vue'
import { useConfig } from '../provide-config/data'
const baseName = 'button'
defineOptions({
  name: componentName(baseName),
})
type Props = {
  type?: Types
  disabled?: boolean
  loading?: boolean // 是否加载中
  icon?: DefineComponent // icon组件
  circular?: boolean // 圆形
  link?: boolean
  round?: boolean // 边框原型
  plain?: boolean // 空心
}
const props = withDefaults(defineProps<Props>(), {})
const config = useConfig()
const finalType = computed(() => config.type || props.type)
const buttonRef = ref<HTMLButtonElement | null>(null)

const classList = computed(() => {
  const classArr = [className('button')]
  if (props.circular) {
    classArr.push(className([baseName, 'circular']))
  }

  if (finalType.value && (props.link || props.plain)) {
    if (props.link) {
      classArr.push(className([baseName, 'link', finalType.value]))
    }
    if (props.plain) {
      classArr.push(className([baseName, 'plain', finalType.value]))
    }
  } else if (finalType.value) {
    classArr.push(className([baseName, finalType.value]))
  }

  return classArr
})

const buttonStyle = ref<Record<string, string | number>>({})

function roundButton() {
  if (props.round) {
    const buttonDom = buttonRef.value
    if (buttonDom) {
      buttonStyle.value['border-radius'] = buttonDom.offsetHeight / 2 + 'px'
    }
  } else {
    delete buttonStyle.value['border-radius']
  }
}
onMounted(() => {
  roundButton()
})
onUpdated(() => {
  roundButton()
})
</script>
