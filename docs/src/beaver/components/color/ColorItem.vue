<template>
  <div class="item-color" :style="{ background: item.cssVar }">
    <span>{{ item.cssVar }}</span>
    <span>{{ item.tips }}</span>
    <span>{{ item.color }}</span>
  </div>
</template>
<script setup lang="ts">
type Props = {
  item: {
    cssVar: string
    color?: string
    tips?: string
  }
}
withDefaults(defineProps<Props>(), {})
</script>
<style scoped lang="scss">
.item-color {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>
