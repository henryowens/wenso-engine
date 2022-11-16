import { h, PropType } from "vue";

import {
  buttonAppearanceMap,
  buttonStyle,
  buttonTextStyle,
  buttonTypeMap,
} from "../styles";
import { withProps } from "../../../utils/vue";
import { Spacings, TextSizes } from "@/style";

export type ButtonType = keyof typeof buttonTypeMap;
export type ButtonAppearance = keyof typeof buttonAppearanceMap;

export default withProps(
  {
    type: {
      type: String as PropType<ButtonType>,
      required: false,
      default: "primary",
    },
    appearance: {
      type: String as PropType<ButtonAppearance>,
      required: false,
      default: "default",
    },
    size: {
      type: String as PropType<TextSizes>,
      required: false,
      default: "x-sm",
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
  },
  (props, context) =>
    h(
      "button",
      { class: buttonStyle(props.type, props.appearance, props.margin) },
      h("span", { class: buttonTextStyle(props.size) }, context.slots)
    )
);
