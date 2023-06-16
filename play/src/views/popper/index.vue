<template>
  <div>
    <button ref="buttonRef">測試</button>
  </div>
</template>
<script setup lang="ts">
import Popper from '@beaver-ui/popper'
import { onMounted, ref } from 'vue'

const buttonRef = ref<HTMLButtonElement | null>(null)

onMounted(() => {
  const popper = new Popper({
    dom: buttonRef.value as HTMLButtonElement,
  })
})
</script>

<style scoped></style>
