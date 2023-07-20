import { ref } from '../lib/vue.js'

export default {
  template: `<div>{{ test }}</div>`,
  setup() {
    const test = ref('Hello Vue!')
    return {
      test,
    }
  },
}
