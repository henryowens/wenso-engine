import {
  library,
  IconDefinition,
  IconPack,
} from "@fortawesome/fontawesome-svg-core";
import { px } from "csx";
import { reactive } from "vue";

import { ColorConfig, FontInput, useColors, useFont } from "../style";

export interface Config {
  colors?: ColorConfig;
  font?: FontInput;
  icons?: IconDefinition | IconPack;
  style?: { borderRadius?: string | number };
}

export default (config: Config) => {
  config.colors && useColors.update(config.colors);
  useFont().update(config.font);
  config.icons && library.add(config.icons);
};
