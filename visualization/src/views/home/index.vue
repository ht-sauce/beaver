<template>
  <div>
    <div class="page-list row">
      <template v-for="item in routes" :key="item.path">
        <el-link :href="router.resolve(item.path).href">
          {{ item.meta?.title }}
        </el-link>
        <div class="child">
          <template v-for="child in item.children" :key="child.path">
            <el-link :href="router.resolve(child.path).href">
              <div>{{ child.meta?.title }}</div>
            </el-link>
          </template>
        </div>
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
.row {
  display: flex;
  flex-flow: column;
}
.child {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 20px;
}
</style>
