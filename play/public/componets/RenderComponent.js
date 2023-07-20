import { ref } from '../lib/vue.js'

export default {
  template: `
    <div v-html="modelValue"></div>
  `,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
  },
  setup() {
    // const test = ref('Hello Vue!')
    // return {
    //   test,
    // }
  },
}
