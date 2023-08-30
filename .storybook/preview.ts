import '../src/assets/tailwind.css';
import { createWebHistory, createRouter } from 'vue-router';
import { setup } from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

setup((app) => {
  app.component('fa-icon', FontAwesomeIcon);
  app.use(router);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  layout: 'fullscreen',
};
