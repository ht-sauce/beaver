<template>
  <button :class="className('button')">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { componentName, className } from '@beaver-ui/utils/components'

defineOptions({
  name: componentName('button'),
})
</script>

<style scoped></style>
