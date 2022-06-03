import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App).component('fa-icon', FontAwesomeIcon).mount('#app');
