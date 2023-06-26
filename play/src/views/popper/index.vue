<template>
  <div class="page">
    <button @click="uninstall">卸载绑定</button>
    <button ref="buttonRef" class="bind-dom">測試</button>
    <!--    <div class="arrow"></div>-->
    <div ref="tooltipRef" class="tooltip">
      <span>这是浮窗</span>
    </div>
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
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  //overflow: auto;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -10px;
    right: 42px;
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent #fff #fff;
    transform: rotate(135deg);
    box-shadow: -2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  }
}
.arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  left: 130px;
  top: 75px;
  transform: rotate(45deg);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: -1;
}
</style>
