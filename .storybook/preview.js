import "../src/assets/tailwind.css";

import { app } from "@storybook/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
app.component("fa-icon", FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
