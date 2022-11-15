import { ColorConfig, useColors } from "../style";

export interface Config {
  colors?: ColorConfig;
}
export default (config: Config) => {
  config.colors && useColors.update(config.colors);
};
