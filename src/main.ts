import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';
import UUID from 'vue3-uuid';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

createApp(App)
  .use(router)
  .use(UUID)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
