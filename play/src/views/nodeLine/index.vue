<template>
  <div class="node-line">
    <div class="node1">节点1</div>
    <div class="node2">节点2</div>
  </div>
</template>
<script setup lang="ts">
import connection from '@beaver-ui/connection'

console.log(connection)
</script>

<style scoped lang="scss">
.node-line {
  width: 100vw;
  height: 100vh;
}
.node1,
.node2 {
  width: 200px;
  height: 200px;
  color: #ffffff;
}
.node1 {
  background-color: #f00;
  margin-left: 100px;
}
.node2 {
  background: #00f;
  margin-left: 500px;
}
</style>
