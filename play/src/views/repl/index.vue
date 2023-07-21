<template>
  <div class="editor">
    <Repl :store="store" :editor="Monaco" :showCompileOutput="true" />
  </div>
</template>
<script setup lang="ts">
import { watchEffect } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import '@vue/repl/style.css'

// 从URL检索一些配置选项
const query = new URLSearchParams(location.search)

const store = new ReplStore({
  // 用以前的序列化状态初始化repl
  serializedState: location.hash.slice(1),

  // 如果URL具有showOutput查询，则在输出窗格上启动（仅限移动设备）
  showOutput: query.has('showOutput'),
  // 如果URL具有outputMode查询，则在输出窗格的另一个选项卡上启动
  // 并默认为“预览”选项卡
  outputMode: query.get('outputMode') || 'preview',

  // 在沙箱中指定从中导入Vue运行时的默认URL
  // 默认为jsdelivr.com的CDN链接，版本与Vue的版本匹配
  // from peerDependency
  defaultVueRuntimeURL: '从cdn加载vue.runtime.esm-browser.js',
})

// URL哈希的持久状态
watchEffect(() => history.replaceState({}, '', store.serialize()))

// pre-set import map
store.setImportMap({
  imports: {
    myLib: '指向myLib的esm构建的cdn链接',
  },
})

// 要使用的vue版本
store.setVueVersion('3.3.4')
</script>
<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100vh;
  background: red;
}
</style>
