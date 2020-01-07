/**
 * fundebug：客户端错误监控
 * view adddress: https://www.fundebug.com
 */
import Vue from 'vue'
import * as fundebug from 'fundebug-javascript'
import fundebugVue from 'fundebug-vue'
import { fundebugApiKey, fundebugSilent } from '~/app.config'
import Package from '../package.json'

fundebug.apikey = fundebugApiKey
fundebug.appVersion = Package.version
fundebug.releasestage = process.env.NODE_ENV
fundebug.silent = fundebugSilent

fundebugVue(fundebug, Vue)
