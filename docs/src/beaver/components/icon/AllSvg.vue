<template>
  <div class="all-svg">
    <template v-for="item in SvgList" :key="item">
      <div class="svg-block">
        <be-icon :icon="item" class="svg-icon" />
        <div class="icon-name">{{ item }}</div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { SvgList } from 'beaver-ui'
</script>

<style lang="scss" scoped>
@use '@beaver-ui/theme/vars/function.scss' as *;
.all-svg {
  display: inline-flex;
  flex-wrap: wrap;
  border-top: 1px solid GetVar('border');
  border-left: 1px solid GetVar('border');
}

.svg-block {
  display: inline-flex;
  width: 114.5px;
  height: 100px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-right: 1px solid GetVar('border');
  border-bottom: 1px solid GetVar('border');
  cursor: pointer;
  word-wrap: break-word;
  &:hover {
    background: GetVar('main-color5');
    color: #ffffff;
    .icon-name,
    .svg-icon {
      color: #ffffff;
    }
  }
  .icon-name {
    width: 100%;
    text-align: center;
    font-size: GetVar('h5');
    color: GetVar('font-main');
  }
}
</style>
