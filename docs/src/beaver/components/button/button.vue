<template>
  <div>
    <TestCom :type="type" />
    <be-button type="primary" @click="setType('primary')" :icon="Search">主颜色</be-button>
    <be-button type="warning" @click="setType('warning')">警告</be-button>
    <be-button type="danger" @click="setType('danger')">错误</be-button>
    <be-button type="success" @click="setType('success')">成功</be-button>

    <div>图标</div>
    <be-button type="primary" :icon="Search"></be-button>
    <be-button type="warning" :icon="AddUser"></be-button>
    <be-button type="danger" :icon="AppStore"></be-button>
    <be-button type="success" :icon="Arrawsalt"></be-button>
    <div>圆形</div>
    <be-button type="primary" circular @click="setType('primary')" :icon="Search"> </be-button>
    <be-button type="warning" circular @click="setType('warning')" :icon="AddUser"> </be-button>
    <be-button type="danger" circular @click="setType('danger')" :icon="AppStore"> </be-button>
    <be-button type="success" circular @click="setType('success')" :icon="Arrawsalt"> </be-button>
    <div>文字按钮</div>
    <be-button type="primary" @click="setType('primary')" link :icon="Search">主颜色</be-button>
    <be-button type="warning" @click="setType('warning')" link :icon="AddUser">警告</be-button>
    <be-button type="danger" @click="setType('danger')" link :icon="AppStore">错误</be-button>
    <be-button type="success" @click="setType('success')" link :icon="Arrawsalt">成功</be-button>
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
