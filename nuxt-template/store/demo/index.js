import axios from '~/plugins/axios'
import { MutationTypes, ActionTypes } from '../types'

export const state = () => ({
    demoData: {}
})

export const mutations = {
    // 获取DEMO信息
    [MutationTypes.UPDATE_DEMO] (state, data) {
        state.demoData = data
    }
}

export const actions = {
    // 获取DEMO数据
    async [ActionTypes.GET_DEMO_SUMMARY] ({ commit }, startDate = new Date(new Date().toLocaleDateString()), endDate = new Date()) {
        const { data } = await axios.get('app_store/report/store/countBillingSummary', {
            params: {
                startDate: startDate.getTime(),
                endDate: endDate.getTime()
            }
        })
        commit(MutationTypes.UPDATE_DEMO, data)
    }
}
