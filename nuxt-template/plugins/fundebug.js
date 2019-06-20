/**
 * fundebug：客户端错误监控
 * view adddress: https://www.fundebug.com
 * account: zhangling1@shinhofood.com password: Shinho123
 */

import Vue from 'vue'
import fundebug from 'fundebug-javascript'
import { fundebugApiKey } from '~/app.config'
import Package from '../package.json'

Object.assign(fundebug, {
	apikey: fundebugApiKey,
	appversion: Package.version,
	releasestage: process.env.ENV
})

function formatComponentName (vm) {
	if (vm.$root === vm) return 'root'

	var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name
	return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '')
}

Vue.config.errorHandler = function (err, vm, info) {
	var componentName = formatComponentName(vm)
	var propsData = vm.$options && vm.$options.propsData

	fundebug.notifyError(err, {
		metaData: {
			componentName: componentName,
			propsData: propsData,
			info: info
		}
	})
}
