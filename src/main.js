// import './assets/main.css'
// // import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// import PrimeVue from 'primevue/config';
// import Aura from '@primeuix/themes/aura';

// const app = createApp(App);

// app.use(PrimeVue, {
//   theme: {
//     preset: Aura
//   }
// });

// createApp(App).mount('#app')

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

// 如果你项目用到 Bootstrap，可以保留这行；不用就删掉
import 'bootstrap/dist/css/bootstrap.min.css';

// PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// （可选）如果会用到图标
// import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app');

