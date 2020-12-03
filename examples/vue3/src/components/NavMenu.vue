/**
 * 左侧导航栏
 */
<template lang="pug">
el-menu.el-menu-vertical-demo(:uniqueopened='true' default-active='1' background-color='#545c64' text-color='#fff' active-text-color='#ffd04b')
  el-menu-item(:index='index+1' v-for='(link, index) in links' @click="handleLink(link)")
    i.el-icon-menu
    span {{link.text}}
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const links = ref([{
      text: '目录1',
      url: '/'
    }, {
      text: '目录2',
      url: '/404'
    }, {
      text: '目录3',
      url: '/3'
    }, {
      text: '目录4',
      url: '/4'
    }])
    // 跳转
    const { proxy } = getCurrentInstance();

    const handleLink = (link) => {
      proxy.$router.push(link.url)
    };

    return {
      links,
      handleLink,
    };
  },
});
</script>

<style lang="stylus" scoped>
.el-menu
  border none
  a
    text-decoration none
    color #fff
  .is-active a
    color #ffd04b
</style>
