// demo: demo
<template lang="pug">
div.container
	//- header
	mt-header(fixed title="demo")
		router-link(to="/report" slot="left")
			mt-button(icon="back")

	//- datetime-picker
	timePickerGroup.timePicker(
		:pickerConfirm="searchBillingSummary"
	)

	//- list
	mt-cell(title="订单数" :value="demoData.orderTotal + '单'")
	mt-cell(title="订单金额" :value="demoData.orderAmount | number(2) + '元'")
	mt-cell(title="应收金额" :value="demoData.receivableAmount | number(2) + '元'")
	mt-cell(title="实收金额" :value="demoData.receivedAmount | number(2) + '元'")
	mt-cell(title="差额" :value="demoData.differenceAmount | number(2) + '元'")
	mt-cell(title="优惠统计" :value="demoData.discountAmount | number(2) + '元'")
	mt-cell(title="系统抹零" :value="demoData.orderRoundAmount | number(2) + '元'")
</template>

<script>
import timePickerGroup from './components/timePickerGroup'

export default {
	fetch ({ store, params }) {
		store.dispatch('demo/index/GET_DEMO_SUMMARY')
	},

	computed: {
		demoData () { return this.$store.state.demo.index.demoData },
	},

	components: {
		timePickerGroup
	},

	methods: {
		// search
		searchBillingSummary (startDate, endDate) {
			this.$store.dispatch('demo/index/GET_DEMO_SUMMARY', startDate, endDate)
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/demo/index'
</style>
