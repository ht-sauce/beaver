<template>
  <div class="edit">
    <ComponentList />
    <div class="page-edit">
      <PageConfig />
      <iframe
        class="edit-preview"
        :style="{ width: CurrentDeviceItem.px }"
        :src="router.resolve('/preview').href"
      ></iframe>
    </div>

    <ComponentAttribute />
  </div>
</template>
<script setup lang="ts">
import ComponentAttribute from './component-attribute/index.vue'
import ComponentList from './component-list/index.vue'
import PageConfig from './page-config/index.vue'

import { useRouter } from 'vue-router'
import { CurrentDeviceItem } from '@/views/edit/useData'

const router = useRouter()
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.edit {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.edit-preview {
  border: 1px GetVar(border) solid;
  flex: 1;
  box-sizing: border-box;
  box-shadow: GetVar(shadow1);
  height: 100%;
}
.page-edit {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: GetVar('margin0');
  //justify-content: center;
}
</style>
