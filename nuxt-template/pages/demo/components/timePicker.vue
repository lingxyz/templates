// 日期选择
<template lang="pug">
div
    span.timePickerBtn.center-center(@click="openPicker")
        span(v-if="type == 'date'") {{pickerValue | date('YYYY-MM-DD')}}
        span(v-if="type == 'datetime'") {{pickerValue | date('YYYY-MM-DD HH:MM')}}
        span(v-if="type == 'time'") {{pickerValue | date('HH:MM')}}
        img.icon-down(src="~assets/images/down.svg")
    mt-datetime-picker(
        ref="picker"
        :type="type"
        v-model="pickerValue"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        confirmText="完成"
        @confirm="pickerConfirm")
</template>

<script>
export default {
    name: 'timePicker',

    props: {
        type: {
            type: String,
            default: 'date'
        },
        pickerValue: {
            type: Date,
            default: function () {
                return new Date()
            }
        }
    },

    methods: {
        // open datetime picker
        openPicker(index) {
            this.$refs.picker.open()
        },

        // confirm handler
        pickerConfirm (date) {
            this.$emit('getPickerDate', date)
        }
    }
}
</script>

<style lang="stylus" scoped>
// date time picker
.timePickerBtn
    text-align center
    color #000
    padding: .05rem
    border 1px solid #ccc
    border-radius .08rem
.icon-down
    width: .2rem
    margin-left: .05rem
</style>
