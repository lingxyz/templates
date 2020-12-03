<template lang="pug">
h1 {{ msg }}
p
  | Recommended IDE setup:
  a(href='https://code.visualstudio.com/' target='_blank') VSCode
  |     +
  a(href='https://marketplace.visualstudio.com/items?itemName=octref.vetur' target='_blank')
    | Vetur
  |     or
  a(href='https://github.com/johnsoncodehk/volar' target='_blank') Volar
  |     (if using
  code &lt;script setup&gt;
  | )
p
  | See
  code README.md
  |  for more information.
p
  a(href='https://vitejs.dev/guide/features.html' target='_blank')
    | Vite Docs
  |     |
  a(href='https://v3.vuejs.org/' target='_blank') Vue 3 Docs
button(type='button' @click='count++') count is: {{ count }}
p
  | Edit
  code components/HelloWorld.vue
  |  to test hot module replacement.
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped lang="stylus">
a
  color #42b983
label
  margin 0 0.5em
  font-weight bold
code
  background-color #eee
  padding 2px 4px
  border-radius 4px
  color #304455
</style>
