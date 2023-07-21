<template>
  <div class="page">
    <template v-for="item in routes" :key="item.path">
      <div>
        <router-link :to="item.path">{{ item.meta?.title }}</router-link>
      </div>
    </template>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
</style>
