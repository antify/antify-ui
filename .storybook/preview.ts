import '../src/assets/tailwind.css';
import 'tailwindcss/tailwind.css';
import { createWebHistory, createRouter } from 'vue-router';
import { Preview, setup } from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'test',
    redirect: '/#',
    path: '/#',
  }],
});

setup((app) => {
  app.component('fa-icon', FontAwesomeIcon);
  app.use(router);
});

const preview: Preview = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-4"><story /></div>',
    }),
  ],
};

export default preview;

export const parameters = {
  chromatic: { disableSnapshot: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'alpha'
  },
  layout: 'fullscreen',
};
