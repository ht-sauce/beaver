<template>
  <div class="edit">
    <ComponentList />
    <div>
      <PageConfig />
      <reference-scale>
        <iframe :src="router.resolve('/preview').href" class="edit-preview"></iframe>
      </reference-scale>
    </div>

    <ComponentAttribute />
  </div>
</template>
<script setup lang="ts">
import ComponentAttribute from './component-attribute/index.vue'
import ComponentList from './component-list/index.vue'
import PageConfig from './page-config/index.vue'
import ReferenceScale from './reference-scale/index.vue'

import { useRouter } from 'vue-router'

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
  box-sizing: border-box;
  box-shadow: GetVar(shadow1);
  width: 500px;
  min-height: 100%;
}
</style>
