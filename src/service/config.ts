import { ColorConfig, FontInput, useColors, useFont } from "../style";

export interface Config {
  colors?: ColorConfig;
  font?: FontInput;
}
export default (config: Config) => {
  config.colors && useColors.update(config.colors);
  useFont().update(config.font);
};
