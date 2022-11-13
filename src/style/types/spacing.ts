import { SPACING_MAP } from "../constants";

export type Spacing = keyof typeof SPACING_MAP;

export type Spacings =
  | `${Spacing} ${Spacing} ${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing} ${Spacing}`
  | `${Spacing} ${Spacing}`
  | Spacing;
