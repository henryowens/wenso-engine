import { App } from "vue";

import flex from "./functions/flex";

export default (app: App) => {
  app.component("flex", flex);
};
