<template>
  <div>
    <div>基础使用方式，引入svg源码方式，组件库提供的@beaver-ui/icons</div>
    <be-icon class="svg-icon">
      <AddTeam />
    </be-icon>
    <div>svg源码提取改为vue文件方式</div>
    <be-icon class="svg-icon">
      <IconBarcode />
    </be-icon>
    <div>通过vite(?raw)或webpack(raw-loader)等打包引入svg图片文件源码，以下为vite方式</div>
    <be-icon class="svg-icon" v-html="bangongyongpinguanli"> </be-icon>
  </div>
</template>
<script setup lang="ts">
import { AddTeam } from '@beaver-ui/icons'
import IconBarcode from './IconBarcode.vue'
import bangongyongpinguanli from './bangongyongpinguanli.svg?raw'
</script>
<style scoped lang="scss">
.svg-icon {
  font-size: 50px;
}
</style>
