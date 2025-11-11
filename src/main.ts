import { createApp } from 'vue'
import App from './app/App.vue'
import router from './app/routes'

import './styles/tailwind.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
