import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import installElementPlus from './plugins/element'
import installAxios from './plugins/axios'

const app = createApp(App)
installElementPlus(app)
installAxios(app)
app.use(router).mount('#app')
