<template>
  <div>
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
