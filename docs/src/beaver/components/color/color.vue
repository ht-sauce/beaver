<template>
  <div class="title">10个主题色</div>
  <div class="main-color">
    <template v-for="(item, index) in cssList.mainColor" :key="item.cssVar">
      <ColorItem
        :item="item"
        :class="{
          'text-color-white': index > 4,
        }"
      />
    </template>
  </div>

  <div class="title">基础色块和提示色</div>
  <template v-for="(item, index) in cssList.baseColor" :key="item.cssVar">
    <ColorItem
      :item="item"
      :class="{
        'text-color-white': index !== 1,
      }"
    />
  </template>

  <div class="title">字体颜色</div>

  <div class="title">整体背景色</div>

  <div class="title">字体大小</div>

  <div class="title">字重</div>

  <div class="title">阴影</div>

  <div class="title">间距</div>

  <div class="title">内间距</div>

  <div class="title">边框</div>
</template>
<script setup lang="ts">
import ColorItem from './ColorItem.vue'
import { allCssList } from './CssConfigList'

const cssList = allCssList()
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;

.title {
  font-size: GetVar(h2);
  margin-top: GetVar(margin0);
  margin-bottom: GetVar(margin0);
  font-weight: GetVar(bold-title);
}
.item-color {
  padding: 10px 20px;
}
.text-color-white {
  color: GetVar('white0');
}
</style>
