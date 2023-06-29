<template>
  <div class="edit">
    <iframe :src="router.resolve('/preview').href" class="edit-preview"></iframe>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.edit {
  display: flex;
  justify-content: center;
  height: 100%;
}
.edit-preview {
  border: 1px GetVar(border) solid;
  box-sizing: border-box;
  box-shadow: GetVar(shadow1);
  width: 1200px;
  height: 100vh;
}
</style>
