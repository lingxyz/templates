import Vue from 'vue'
import {mapGetters, mapState} from 'Vuex'

let map;
/*
*
* input输入限制
* */
Vue.directive('numberOnly', function (el) {
  document.addEventListener('keyup', function () {
    console.log(el.value)
    el.value = el.value.replace(/\D/g, '')
  })
})

// 权限
Vue.directive('auth', {
  inserted(el, binding, {context: {$root: {$store}}}) {
    let localUserBo = $store.state.account.login.localUserBo;
    checkAuth(el, binding, localUserBo)
  },
  update(el, binding, {context: {$root: {$store}}}) {
    let list = $store.state.account.login.localUserBo;
    checkAuth(el, binding, localUserBo)
  }
})

function checkAuth(el, binding, localUserBo) {
  let code = binding.value;
  if (!code) {
    return;
  }

  let dataDisplay = el.dataset.display || ''
  if (!dataDisplay) {
    let display = window.getComputedStyle(el).display
    el.dataset.display = dataDisplay = display
  }

  //debugger
  if (localUserBo.authorityBOMap[code]) {
    el.style.display = dataDisplay
  } else {
    el.style.display = 'none'
  }
}

/*
*       设置将元素获得焦点
* */

Vue.directive('focus', function (el, {value}) {
  if(value) {
    el.focus()
  }
})


