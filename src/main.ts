import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@style/vendor/index.less'
import '@style/global/index.less'

createApp(App).use(router).mount('#app')
