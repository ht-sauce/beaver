<template>
  <div>
    <div class="main-color">
      <template v-for="item in mainColor" :key="item">
        <div class="item-color" :style="{ background: getCssVar(item) }">{{ item }}</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { config } from '@beaver-ui/theme/config'
const { namespace, connector } = config

function getCssVar(name: string) {
  return `var(${name})`
}

const mainColor = ref(
  [...Array(20)].map((li, index) => {
    return `--${namespace}${connector}main-color${index}`
  }),
)
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/config.scss';

.item-color {
  padding: 10px 20px;
  //background: var(--be-main-color5);
}
</style>
