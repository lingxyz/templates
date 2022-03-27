<template lang="pug">
DeaultLayout
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeaultLayout from './layouts/DeaultLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    DeaultLayout
  }
})
</script>

<style lang="stylus">
html, body
  margin 0
  padding 0
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
