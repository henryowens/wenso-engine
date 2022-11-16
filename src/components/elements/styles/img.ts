import { Spacings, useMargin } from "../../../style";
import { style } from "typestyle";

export default (margin: Spacings, width: string, height: string) =>
  style({ width, height, ...useMargin(margin) });
