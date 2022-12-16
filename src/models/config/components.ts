import { TextSizes } from "../../style";

interface TextComponentConfig {
  fontFamily?: { [key in TextSizes]?: string };
}

export default interface ComponentConfig {
  text?: TextComponentConfig;
}
