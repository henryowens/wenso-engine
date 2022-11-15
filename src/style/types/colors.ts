import { defaultColors } from "../helpers";

export interface ColorConfig {
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  link?: string;
}

export type Colors = keyof typeof defaultColors;
