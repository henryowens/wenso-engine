import { ColorConfig, FontInput } from "../../style";
import { IconDefinition, IconPack } from "@fortawesome/fontawesome-svg-core";
import ComponentConfig from "./components";

export type IconDefinitionOrPack = IconDefinition | IconPack;
export interface Config {
  colors?: ColorConfig;
  fonts?: FontInput[];
  defaultFont?: string;
  icons?: IconDefinitionOrPack[];
  style?: { borderRadius?: string | number };
  components?: ComponentConfig;
}
