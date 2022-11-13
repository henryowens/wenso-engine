import { Property } from "csstype";
import { h, PropType } from "vue";

import { Spacings } from "@/style";
import { FlexDirectionProperty, FlexWrapProperty } from "@/models";
import { withProps } from "@/utils/vue";
import { flexStyle } from "../styles";

export default withProps(
  {
    alignItems: {
      type: String as PropType<Property.AlignItems>,
      required: false,
    },
    justifyContent: {
      type: String as PropType<Property.JustifyContent>,
      required: false,
    },
    flexDirection: {
      type: String as PropType<FlexDirectionProperty>,
      required: false,
    },
    flexWrap: {
      type: String as PropType<FlexWrapProperty>,
      required: false,
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    padding: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
    flexGrow: {
      type: Number as PropType<Property.FlexGrow>,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
  },
  (props, context) =>
    h(
      "div",
      { ...context.attrs, class: flexStyle(props) },
      context.slots.default && context.slots.default()
    )
);
