import { Spacings, useMargin } from "../../../style";
import { style } from "typestyle";

export default (margin: Spacings, width: string, height: string) => {
  return style({
    transition: "3s",
    width,
    height,
    ...useMargin(margin),
  });
};
