// 时间选择Group
<template lang="pug">
div
    div.center-center.timePickerGroup.border-bottom
        timePicker(
            type="datetime"
            :pickerValue="startPickerValue"
            @getPickerDate="getStartPickerDate"
        )
        span —
        timePicker(
            type="datetime"
            :pickerValue="endPickerValue"
            @getPickerDate="getEndPickerDate"
        )
</template>

<script>
import timePicker from './timePicker'

export default {
    name: 'timePickerGroup',

    data () {
        return {
            type: 'date',
            startPickerValue: new Date(new Date().toLocaleDateString()),
            endPickerValue: new Date(),
        }
    },

    props: {
        pickerConfirm: {
            type: Function,
            default: function(){}
        }
    },

    components: {
        timePicker
    },

    methods: {
        getStartPickerDate (date) {
            this.startPickerValue = date
            this.pickerConfirm(this.startPickerValue, this.endPickerValue)
        },

        getEndPickerDate (date) {
            this.endPickerValue = date
            this.pickerConfirm(this.startPickerValue, this.endPickerValue)
        }
    }
}
</script>

<style lang="stylus" scoped>
// date time picker group
.timePickerGroup
    height .8rem
    span 
        color #FF265E
        margin: 0 .15rem
</style>