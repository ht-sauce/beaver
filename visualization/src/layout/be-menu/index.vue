<template>
  <el-popover placement="right" trigger="hover">
    <el-tree :data="menuList">
      <template #default="{ data }">
        <el-link class="menu-item" :href="router.resolve(data.path).href" type="primary" target="_blank">
          {{ data.meta.title }}
        </el-link>
      </template>
    </el-tree>
    <template #reference>
      <div ref="menuRef">
        <el-button class="menu" type="primary" :icon="Menu" title="菜单" circle />
      </div>
    </template>
  </el-popover>
</template>
<script setup lang="ts">
import Move from '@beaver-ui/library/move/move'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = computed(() => {
  return router.options.routes ?? []
})
const menuRef = ref()
let MoveExample: Move
onMounted(() => {
  MoveExample = new Move({
    bindDom: menuRef.value,
    windowBoundary: true,
  })
})

onUnmounted(() => {
  MoveExample.uninstall()
})
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.menu {
  background: GetVar('main-color5');
  padding: GetVar('padding2');
  border-radius: 50%;
}
.menu-item {
  //width: 100%;
}
</style>
