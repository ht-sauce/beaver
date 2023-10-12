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
$border: 1px solid GetVar('border');
.all-svg {
  display: inline-flex;
  flex-wrap: wrap;
  border-top: $border;
  border-left: $border;
}

.svg-block {
  display: inline-flex;
  width: 114.5px;
  height: 100px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-right: $border;
  border-bottom: $border;
  cursor: pointer;
  word-wrap: break-word;
  &:hover {
    background: GetVar('main-color5');
    color: GetVar('white');
    .icon-name,
    .svg-icon {
      color: GetVar('white');
    }
  }
  .icon-name {
    width: 100%;
    text-align: center;
    font-size: GetVar('h5');
  }
}
</style>
