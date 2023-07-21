<template>
  <div>
    <a href="https://www.baidu.com?test =1" target="_blank">百度，点击查看效果</a>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
/*
思路：
1、拦截所有的 a 标签的点击事件实现方式
2、遍历范围内所有的 a 标签，通过正则的方式匹配地址进行替换
*/
document.body.addEventListener('click', function (event) {
  event.preventDefault() // 先阻止默认行为
  const href = (event.target as HTMLAnchorElement).href
  if (!href) return
  // 安全地址检测
  const safeUrlList = [
    // 'baidu.com', 'google.com' 示例
  ]
  // some如果有一个满足条件就返回true
  const isSafeUrl = safeUrlList.some((urlItem) => {
    return href.includes(urlItem)
  })

  let ATag = document.createElement('a')
  ATag.target = '_blank' // 统一新窗口打开
  if (isSafeUrl) {
    // 是安全地址，就不拦截
    ATag.href = href
  } else {
    // 不是安全地址，就拦截
    ATag.href = '你的网址拦截页面地址?outerChain=' + href
  }
  ATag.click()
  ATag = null // 释放内存
})
</script>

<style scoped lang="scss"></style>
