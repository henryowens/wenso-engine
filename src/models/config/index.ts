import { ColorConfig, FontInput } from "../../style";
import { IconDefinition, IconPack } from "@fortawesome/fontawesome-svg-core";
import ComponentConfig from "./components";

export interface Config {
  colors?: ColorConfig;
  fonts?: FontInput[];
  defaultFont?: string;
  icons?: IconDefinition | IconPack;
  style?: { borderRadius?: string | number };
  components?: ComponentConfig;
}
