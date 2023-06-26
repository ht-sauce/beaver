<template>
  <div class="page">
    <button @click="uninstall">卸载绑定</button>
    <button ref="buttonRef" class="bind-dom">測試</button>
    <div ref="tooltipRef" class="tooltip">这是浮窗</div>
  </div>
</template>
<script setup lang="ts">
import Popper from '@beaver-ui/popper'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const buttonRef = ref<HTMLButtonElement | null>(null)
const tooltipRef = ref<HTMLDivElement | null>(null)

let popper: Popper
onMounted(() => {
  popper = new Popper({
    bindDom: buttonRef.value as HTMLButtonElement,
    tooltipDom: tooltipRef.value as HTMLDivElement,
    direction: 'right',
    // zIndex: 10,
  })
  // popper.upPosition()
})
onBeforeUnmount(() => {
  uninstall()
})
function uninstall() {
  popper.uninstall()
}
</script>

<style scoped lang="scss">
.page {
  height: 300vh;
  width: 300vw;
  //display: flex;
  //align-items: center;
  //justify-content: center;
}
.bind-dom {
  //position: absolute;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
}
.tooltip {
  width: 100px;
  height: 100px;
  background: white;
  box-shadow: black 0 0 4px;
}
</style>
