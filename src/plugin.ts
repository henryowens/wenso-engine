import { App } from "vue";

import components from "./components";
import useConfig, { Config } from "./service/config";

export default (app: App, config: Config) => {
  useConfig(config);
  app.use(components);
};
