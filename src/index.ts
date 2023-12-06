import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import * as components from './components';
import {App, Component} from 'vue';

export const AntifyUi = {
  install(app: App) {
    for (const key in components) {
      app.component(key, (components as Record<string, Component>)[key]);
    }

    app.component('fa-icon', FontAwesomeIcon);
  },
};

export * from './components';
export * from './enums';
export * from './types';
export * from './components/__types';
export * from './components/form/__types';
export * from './components/form/Elements/__types';
