<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  template: Object,
})

const SvgVue = defineAsyncComponent(() => Promise.resolve(props.template))
</script>

<template>
  <SvgVue />
</template>
