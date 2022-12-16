import { App } from "vue";

import components from "./components";
import { Config } from "./models/config";
import useConfig from "./service/config";

export default (app: App, config: Config) => {
  useConfig.mutateConfig(config);
  app.use(components);
};
