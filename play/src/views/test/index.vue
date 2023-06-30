<template>
  <div style="display: flex">
    <div class="p" ref="testARef">
      <div class="testb" ref="testbRef">
        <div class="testc" ref="testcRef"></div>
      </div>
      <div class="test" ref="moveRef">移动元素测试</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Move from '@beaver-ui/library/move/move'
import { onMounted, ref } from 'vue'
import ClickOutside from '@beaver-ui/library/click-outside/clickOutside'

const testARef = ref()
const moveRef = ref()
const testbRef = ref()
const testcRef = ref()

onMounted(() => {
  const move = new Move({
    bindDom: moveRef.value,
    parentNodeBoundary: true,
    x: 100,
    y: 100,
    change(data) {
      // console.log(data)
    },
  })
  new ClickOutside({ bindDom: testARef.value })
  // console.log(testARef.value.compareDocumentPosition(testcRef.value))
})
</script>

<style scoped>
.p {
  width: 500px;
  height: 500px;
  background: #41d1ff;
}
.test {
  background: red;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.testb {
  width: 300px;
  height: 300px;
  background: #52c41a;
}
.testc {
  width: 200px;
  height: 200px;
  background: #874d00;
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
