<template>
  <div>
    <div>引入svg源码方式，使用svg内置vue文件导入页面</div>
    <be-icon class="svg-icon">
      <IconBarcode />
    </be-icon>
    <div>通过vite(?raw)或webpack(raw-loader)等打包引入svg图片文件源码，以下为vite方式</div>
    <be-icon class="svg-icon" v-html="bangongyongpinguanli"> </be-icon>
  </div>
</template>
<script setup lang="ts">
import IconBarcode from './IconBarcode.vue'
import bangongyongpinguanli from './bangongyongpinguanli.svg?raw'
</script>
<style scoped lang="scss">
.svg-icon {
  font-size: 50px;
}
</style>
