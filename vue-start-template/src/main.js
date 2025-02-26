import './assets/main.css'

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.min.css"


const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme:{
        preset: Aura,
    },
});

app.mount('#app');




