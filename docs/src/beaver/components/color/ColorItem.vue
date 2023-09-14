<template>
  <div class="item-color" :style="itemStyle">
    <span>{{ item.cssVar }}</span>
    <span>{{ item.tips }}</span>
    <span>{{ item.color }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
type Props = {
  item: {
    cssVar: string
    color?: string
    tips?: string
  }
  color?: 0 | 1 | 2 // 0: 背景颜色 1: 文字 2: 无颜色
}
const props = withDefaults(defineProps<Props>(), {
  color: 0,
})

const itemStyle = computed(() => {
  if (props.color === 0) {
    return {
      background: props.item.cssVar,
    }
  }
  if (props.color === 1) {
    return {
      color: props.item.cssVar,
    }
  }
  return {}
})
</script>
<style scoped lang="scss">
.item-color {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>
