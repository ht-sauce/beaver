<template>
  <be-provide-config :type="type">
    <be-button>传入的type：{{ type }}</be-button>
  </be-provide-config>
</template>
<script setup lang="ts">
defineProps({
  type: String,
})
</script>
