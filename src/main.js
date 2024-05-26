import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(router)
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
