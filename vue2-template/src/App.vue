<template lang="pug">
#app
  transition(:name="transitionName")
    router-view(class="child-view")
  // TabBar(v-if="tabBarPaths.includes($route.path)")
</template>

<script>
// import TabBar from '@/components/TabBar'

export default {
  name: 'App',

  data () {
    return {
      transitionName: 'slide-left', // 专场动画
      isShowTabBar: false,  // 是否显示TabBar
      tabBarPaths: ['/', '/cart', '/user'],  // TabBar 路径（一级页面相互个跳转用fade）
    }
  },

  components: {
    // TabBar
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

      if (this.tabBarPaths.includes(from.path)
        && this.tabBarPaths.includes(to.path))
        this.transitionName = 'fade'
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

// css transition: when pages loaded
.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease
.fade-enter, .fade-leave-active
  opacity: 0
.child-view
  position: absolute
  top 0
  transition: all .5s cubic-bezier(.55,0,.1,1)
  width 100%
.slide-left-enter, .slide-right-leave-active
  opacity: 0
  -webkit-transform: translate(200px, 0)
  transform: translate(200px, 0)
.slide-left-leave-active, .slide-right-enter
  opacity: 0
  -webkit-transform: translate(-200px, 0)
  transform: translate(-200px, 0)
</style>
