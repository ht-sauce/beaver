<template>
  <div class="code-block">
    <div>
      <span>复制代码</span>
      <span @click="codeShow = !codeShow">查看代码</span>
    </div>
    <AsyncComponents />
    <Transition name="be-fade">
      <div class="code-show" v-show="codeShow">
        <highlightjs language="vue" :code="codeString" />
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, defineAsyncComponent, ref } from 'vue'
defineOptions({ name: 'CodeBlock' })

type Props = {
  path: string
}
const props = withDefaults(defineProps<Props>(), { path: '' })

onMounted(() => {
  if (!props.path) return
  getCode()
})

const codeShow = ref(false)

function getPath(isRaw = false) {
  const path = '../../beaver/components/' + props.path
  return isRaw ? path + '?raw' : path
}
// 外部传入的组件数据
const AsyncComponents = defineAsyncComponent(() => import(getPath()))

const codeString = ref('')
async function getCode() {
  const sourceCode = await import(/* @vite-ignore */ getPath(true))
  codeString.value = sourceCode.default
}
</script>

<style scoped lang="scss">
@use '@beaver-ui/theme/vars/function.scss' as *;
.code-block {
  border: 1px solid GetVar(border);
}
.code-show {
  height: 0;
}
</style>
