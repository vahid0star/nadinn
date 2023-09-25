import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'ant-design-vue/dist/reset.css';


createApp(App).use(router).mount('#app')
App.use(Antd).mount('#app')
