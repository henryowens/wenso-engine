import {
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
  SIZE_XX_LARGE,
  SIZE_XX_SMALL,
  SIZE_X_LARGE,
  SIZE_X_SMALL,
} from "../constants";

export type Sizes =
  | typeof SIZE_XX_SMALL
  | typeof SIZE_X_SMALL
  | typeof SIZE_SMALL
  | typeof SIZE_MEDIUM
  | typeof SIZE_LARGE
  | typeof SIZE_X_LARGE
  | typeof SIZE_XX_LARGE;
