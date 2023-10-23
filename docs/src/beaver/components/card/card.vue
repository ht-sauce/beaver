<template>
  <div>
    有标题的卡片
    <be-card title="测试标题"> 测试内容 </be-card>
    有header的
    <be-card>
      <template #header>测试标题</template>
      测试内容
    </be-card>
    无标题的卡片
    <be-card> 测试内容 </be-card>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
