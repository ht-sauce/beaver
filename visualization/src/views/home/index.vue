<template>
  <div>
    <div class="page-list">
      <template v-for="item in routes" :key="item.path">
        <el-link :href="item.path">
          {{ item.meta?.title }}
        </el-link>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.options.routes
</script>
<style scoped>
.page-list {
  display: flex;
  flex-flow: column;
}
</style>
