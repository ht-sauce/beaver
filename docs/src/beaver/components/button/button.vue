<template>
  <div>
    <TestCom :type="type" />
    <be-button type="primary" @click="setType('primary')" :icon="Search">主颜色</be-button>
    <be-button type="warning" @click="setType('warning')">警告</be-button>
    <be-button type="danger" @click="setType('danger')">错误</be-button>
    <be-button type="success" @click="setType('success')">成功</be-button>
    <be-button type="info" @click="setType('info')">信息</be-button>

    <div>图标</div>
    <be-button type="primary" :icon="Search"></be-button>
    <be-button type="warning" :icon="AddUser"></be-button>
    <be-button type="danger" :icon="AppStore"></be-button>
    <be-button type="success" :icon="Arrawsalt"></be-button>
    <be-button type="info" :icon="Arrawsalt"></be-button>
    <div>圆形</div>
    <be-button type="primary" circular :icon="Search"> </be-button>
    <be-button type="warning" circular :icon="AddUser"> </be-button>
    <be-button type="danger" circular :icon="AppStore"> </be-button>
    <be-button type="success" circular :icon="Arrawsalt"> </be-button>
    <be-button type="info" circular :icon="Arrawsalt"></be-button>
    <div>文字按钮</div>
    <be-button type="primary" link :icon="Search">主颜色</be-button>
    <be-button type="warning" link :icon="AddUser">警告</be-button>
    <be-button type="danger" link :icon="AppStore">错误</be-button>
    <be-button type="success" link :icon="Arrawsalt">成功</be-button>
    <be-button type="info" link :icon="Arrawsalt">信息</be-button>

    <div>round，自动获取按钮高度给予</div>
    <be-button type="primary" round :icon="Search">主颜色</be-button>
    <be-button type="warning" round :icon="AddUser">警告</be-button>
    <be-button type="danger" round :icon="AppStore">错误</be-button>
    <be-button type="success" round :icon="Arrawsalt">成功</be-button>
    <be-button type="info" round :icon="Arrawsalt">信息</be-button>
  </div>
</template>
<script setup lang="ts">
import { Search, AddUser, AppStore, Arrawsalt } from '@beaver-ui/icons'

import TestCom from './TestCom.vue'

import { ref } from 'vue'

const type = ref('')

function setType(inType: string) {
  type.value = inType
}
</script>

<style scoped lang="scss">
.icon {
  //font-size: 32px;
}
</style>
