import { App } from "vue";

import flex from "./flex";

export default (app: App) => {
  app.component("flex", flex);
};
