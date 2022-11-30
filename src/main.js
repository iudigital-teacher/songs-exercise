import { createApp } from 'vue'
import App from './App.vue'
import router from '../routes/router';
//import './assets/main.css'

createApp(App)
.use(router)
.mount('#app');
