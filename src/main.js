import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@ant-design/icons-vue';
import store from './store'

createApp(App).use(store).use(router).mount('#app')
App.use(Antd).mount('#app')
