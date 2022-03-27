import axios from 'axios'
import Vue from 'Vue'
import {Message, Loading} from 'element-ui';
import { baseUrl } from '~/app.config'

let fetch = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  transformResponse: [function (data) {
    let jsonData = JSON.parse(data);
    if (jsonData.code != 2010 && jsonData.code != 0) { // 异常请求
      Message.error(jsonData.message || '请求失败');
      throw jsonData.message;
    }
    return jsonData;
  }]
});

let loadingInstance = Loading.service();

// 响应
fetch.interceptors.response.use(function (response) {
  loadingInstance.close();
  return response.data;
}, function (error) {
  loadingInstance.close();
  return Promise.reject(error);
});

// 请求
fetch.interceptors.request.use(function (config) { // loading 配置
  if (config.url.indexOf('?') == -1) { // 所有接口都要有 shopCode
    config.url += `?shopCode=${localStorage.shopCode || ''}&token=${localStorage.token || ''}`
  } else {
    config.url += `&shopCode=${localStorage.shopCode || ''}&token=${localStorage.token || ''}`
  }

  loadingInstance.open(); // loading
  return config;
}, function (error) {
  loadingInstance.close();
  return Promise.reject(error);
});

Vue.prototype.axios = fetch;
// window.axios = instance;
export default fetch
