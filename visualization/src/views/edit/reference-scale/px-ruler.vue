<template>
  <div class="px-ruler" :style="{ width: length }">
    <template v-for="item in length" :key="item">
      <div v-if="isMultiple(item, 10)" class="step">
        <!--        <div v-if="isMultiple(item, 50)" class="num">{{ item }}</div>-->
        <div class="line" :style="{ height: (isMultiple(item, 50) ? 8 : 4) + 'px' }"></div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  length?: number
}
const props = withDefaults(defineProps<Props>(), {
  length: 500,
})
// 判断多少的倍数
function isMultiple(maxNum: number, num) {
  if (maxNum % num === 0) return true
  else return false
}
const stepList = computed(() => {
  const list: number[] = []
  for (let i = 0; i < props.length; i++) {
    if (isMultiple(i + 1, 50)) list.push(i + 1)
  }
  console.log(list)
  return list
})

// const steps = computed(() => {
//
// })
</script>
<style scoped lang="scss">
.px-ruler {
  display: flex;
  overflow: hidden;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.step {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  //align-items: center;
  .num {
    position: absolute;
  }
  .line {
    border: 0;
    width: 1px;
    height: 4px;
    background: black;
  }
}
</style>
