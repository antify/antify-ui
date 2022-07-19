import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
