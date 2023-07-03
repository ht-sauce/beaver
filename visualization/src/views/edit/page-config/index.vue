<template>
  <div class="page-config">
    <el-radio-group v-model="CurrentDevice">
      <template v-for="item in deviceList" :key="item.value">
        <el-radio-button :label="item.value"></el-radio-button>
      </template>
    </el-radio-group>
    <span class="page-width">
      {{ CurrentDeviceItem.px }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { CurrentDevice, CurrentDeviceItem, deviceList } from '@/views/edit/useData'
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.page-config {
  box-sizing: border-box;
  box-shadow: GetVar('shadow1');
  width: 1440px;
  background: GetVar('white0');
  display: flex;
  padding: GetVar('padding2');
  align-items: center;
  margin-bottom: GetVar('margin0');
}
.page-width {
  margin-left: GetVar('margin3');
}
</style>
