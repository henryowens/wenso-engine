import { App } from "vue";

import auxiliary from "./auxiliary";

export default (app: App) => {
  app.use(auxiliary);
};
