import components from './components';

const plugin = {
  install (Vue: any) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        // @ts-ignore
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
}

export default plugin;
