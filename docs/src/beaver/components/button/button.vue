<template>
  <div>
    <TestCom :type="type" />
    <be-button type="primary" @click="setType('primary')">primary</be-button>
    <be-button type="warning" @click="setType('warning')">warning</be-button>
    <be-button type="danger" @click="setType('danger')">danger</be-button>
    <be-button type="success" @click="setType('success')">success</be-button>
    <div>圆形</div>
    <be-button type="primary" circular @click="setType('primary')">primary</be-button>
    <be-button type="warning" circular @click="setType('warning')">warning</be-button>
    <be-button type="danger" circular @click="setType('danger')">danger</be-button>
    <be-button type="success" circular @click="setType('success')">success</be-button>
  </div>
</template>
<script setup lang="ts">
import TestCom from './TestCom.vue'
import { ref } from 'vue'

const type = ref('')

function setType(inType: string) {
  type.value = inType
}
</script>

<style scoped></style>
