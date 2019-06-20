<template lang="pug">
HelloWorld
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  mounted () {
    console.log(this.$config)
  }
}
</script>
