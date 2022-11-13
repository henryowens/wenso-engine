import { App } from "vue";

import auxiliary from "./auxiliary";
import elements from "./elements";

export default (app: App) => {
  app.use(auxiliary);
  app.use(elements);
};
