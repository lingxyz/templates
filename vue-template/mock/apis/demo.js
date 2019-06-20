export default {
  url: /\/api\/demo/,
  type: 'get',
  data: {
    code: 0,
    data: {
      // 差额
      'differenceAmount|1-100.1-2': 1,
      // 折扣金额
      'discountAmount|1-100.1-2': 1,
      // 订单金额
      'orderAmount|1-100.1-2': 1,
      // 抹零金额
      'orderRoundAmount|1-100.1-2': 1,
      // 订单总条数
      'orderTotal|1-100': 1,
      // 应收金额
      'receivableAmount|1-100.1-2': 1,
      // 实收金额
      'receivedAmount|1-100.1-2': 1
    },
    message: ''
  }
}