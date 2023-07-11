<template>
  <i class="be-icon">
    <slot></slot>
  </i>
</template>
<script setup lang="ts">
import { FirstUppercaseNamespace } from '@beaver-ui/theme/config'

defineOptions({
  name: 'BeIcon',
})
</script>

<style scoped></style>
