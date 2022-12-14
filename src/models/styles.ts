type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";

export type FlexDirectionProperty =
  | Globals
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

export type TextAlign =
  | Globals
  | "center"
  | "end"
  | "justify"
  | "left"
  | "match-parent"
  | "right"
  | "start";
