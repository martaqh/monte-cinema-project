import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './styles/common/index.scss'
import './styles/global/index.scss'

import router from'@/router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)

app.use(pinia).mount('#app')