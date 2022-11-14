import { App } from "vue";

export * from "./components";

import { WeText } from "./components";

export default (app: App) => {
  app.component("we-text", WeText);
};
