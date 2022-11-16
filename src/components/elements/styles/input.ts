import { Spacings, textSizes, TextSizes, useMargin, usePadding } from "@/style";
import { px } from "csx";
import { style } from "typestyle";

export default (margin: Spacings, size: TextSizes) =>
  style({
    fontSize: textSizes[size].size,
    border: "5px solid black",
    borderRadius: px(15),
    ...usePadding("x-sm sm"),
    ...useMargin(margin),
    $nest: { "&:focus": { outline: "none" } },
  });
