<template>
  <div class="menu" ref="menuRef"></div>
  <RouterView />
</template>
<script setup lang="ts">
import Move from '@beaver-ui/library/move/move'
import { onMounted, ref } from 'vue'

const menuRef = ref()

onMounted(() => {
  new Move({
    bindDom: menuRef.value,
  })
})
</script>
<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.menu {
  width: 10px;
  height: 10px;
  background: GetVar('main-color0');
}
</style>
