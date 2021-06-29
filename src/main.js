import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register'
import './assets/css/tailwind.css'

createApp(App).use(router).use(store).mount('#app')
