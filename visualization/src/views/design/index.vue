<template>
  <div>
    <div class="main-color">
      <template v-for="item in mainColor" :key="item.cssVar">
        <div class="item-color" :style="{ background: getCssVar(item.cssVar) }">{{ item.cssVar + item.color }}</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { config } from '@beaver-ui/theme/config'
const { namespace, connector } = config

function getCssVar(name: string) {
  return `var(${name})`
}
function getCssVarVal(cssVar: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar)
}

const mainColor = ref(
  [...Array(10)].map((li, index) => {
    const cssVar = `--${namespace}${connector}main-color${index}`

    return {
      cssVar,
      color: getCssVarVal(cssVar),
    }
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
