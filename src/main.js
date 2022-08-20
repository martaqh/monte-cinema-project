import { createApp } from 'vue'
import App from './App.vue'

import './styles/common/index.scss'
import './styles/global/index.scss'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import router from'@/router';

const app = createApp(App);

app.use(router)
app.component('Datepicker', Datepicker);

app.mount('#app')
