<template>
  <button @click="postMessage">发送消息</button>
  <iframe ref="iframeRef" class="iframe" src="/test.html"></iframe>
  <textarea class="edit" @input="onchange" v-model="text"></textarea>
  <div v-html="text"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const iframeRef = ref<HTMLIFrameElement | null>(null)
const text = ref('')
function onchange() {
  console.log(text.value)
}
function postMessage() {
  const iframe = (iframeRef.value as HTMLIFrameElement).contentWindow
  iframe.postMessage(text.value, '*')
}
</script>

<style scoped lang="scss">
.iframe {
  width: 100%;
  height: auto;
}
.edit {
  width: 100%;
  height: 600px;
  background: #41d1ff;
}
</style>
