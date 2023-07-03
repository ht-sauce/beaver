<template>
  <div class="page-config">页面配置</div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.page-config {
  display: flex;
  justify-content: center;
  padding: GetVar('padding2');
}
</style>
