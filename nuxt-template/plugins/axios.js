import axios from 'axios'
import Vue from 'Vue'
import {Toast, Indicator} from 'mint-ui';
import { baseUrl } from '~/app.config'

let fetch = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  transformResponse: [function (data) {
    let jsonData = JSON.parse(data);
    if (jsonData.code != 2010 && jsonData.code != 0) { // 异常请求
      Toast(jsonData.message || '请求失败')
      throw jsonData.message;
    }
    return jsonData;
  }]
});

// 响应
fetch.interceptors.response.use(function (response) {
  Indicator.close();
  return response.data;
}, function (error) {
  Indicator.close();
  return Promise.reject(error);
});

// 请求
fetch.interceptors.request.use(function (config) { // loading 配置
  if (config.url.indexOf('?') == -1) { // 所有接口都要有 shopCode
    config.url += `?shopCode=${localStorage.shopCode || ''}&token=${localStorage.token || ''}`
  } else {
    config.url += `&shopCode=${localStorage.shopCode || ''}&token=${localStorage.token || ''}`
  }

  Indicator.open(); // loading
  return config;
}, function (error) {
  Indicator.close();
  return Promise.reject(error);
});

Vue.prototype.axios = fetch;
// window.axios = instance;
export default fetch
