import axios from 'axios'

export default (app: any) => {
  app.config.globalProperties.$axios = axios
}