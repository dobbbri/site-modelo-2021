import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/css/tailwind.css'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.config.errorHandler = (err) => {
  alert(err)
}
app.use(router)
app.mount('#app')
