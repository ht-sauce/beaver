<template>
  <div>
    <div class="p">
      <div class="test" ref="moveRef">移动元素测试</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Move from '@beaver-ui/library/move/move'
import { onMounted, ref } from 'vue'

const moveRef = ref()
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
</style>
