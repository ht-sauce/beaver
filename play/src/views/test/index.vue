<template>
  <div>
    <button @click="openNewPage">打开页面</button>
    <div>关闭打开页面后，得到变化</div>
  </div>
</template>
<script setup lang="ts">
import { listenChildWindow } from '../../utils/windows'
import ExamplesVue from './ExamplesVue.vue?raw'

let page: Window
function openNewPage() {
  listenChildWindow('/color', (data) => {
    console.log(data)
  })
}
console.log(ExamplesVue)
</script>

<style scoped lang="scss">
.iframe {
  width: 100%;
  height: auto;
}
.edit {
  width: 100%;
  height: 600px;
  background: #41d1ff;
}
</style>
