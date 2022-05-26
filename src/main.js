import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const app = createApp(App)

//挂载全局对象
app.config.globalProperties.$http = axios

app.use(store).use(router).mount('#app')