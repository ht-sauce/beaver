<template>
  <div>
    12313131
    <!--    <div class="page-scrolling-progress"></div>-->
    <div class="test"></div>
    1231311
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  //
})
</script>

<style>
body {
  background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
  background-size: 100% calc(100% - 100vh + 5px);
  background-repeat: no-repeat;
}
body::after {
  content: '';
  position: fixed;
  top: 5px;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  z-index: -1;
}
</style>
<style scoped lang="scss">
.page-scrolling-progress {
  position: fixed;
  top: 0;
  width: 100px;
  background: red;
  height: 5px;
  z-index: 999;
  transition: width 0.3s ease-in-out;
}

.test {
  width: 1px;
  height: 200vh;
}
</style>
