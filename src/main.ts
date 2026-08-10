import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import App from './App.vue'
import { axiosInterceptor } from './core/interceptors/axios-interceptor'
import i18n from './i18n'
import router from './router'

axiosInterceptor()

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
