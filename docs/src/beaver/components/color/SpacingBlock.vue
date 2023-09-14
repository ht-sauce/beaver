<template>
  <div>
    <template v-for="item in listItem" :key="item.cssVar">
      <div class="block">
        <span>{{ item.cssVar }}</span>
        <span>{{ item.tips }}</span>
        <span>{{ item.color }}</span>
      </div>
      <div class="margin-div" :style="{ height: item.cssVar }" :title="item.color"></div>
    </template>
  </div>
</template>
<script setup lang="ts">
type Props = {
  listItem: {
    cssVar: string
    color?: string
    tips?: string
  }[]
}
withDefaults(defineProps<Props>(), {})
</script>
<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.block {
  display: flex;
  justify-content: space-between;
  border-top: 1px GetVar(border) solid;
  border-bottom: 1px GetVar(border) solid;
}
.margin-div {
  background: GetVar(main-color5);
}
</style>
