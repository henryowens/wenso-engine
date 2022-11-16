import { h, PropType } from "vue";

import { TextAlign } from "../../../models";
import { Spacings, TextSizes } from "../../../style";
import { withProps } from "../../../utils/vue";
import { linkStyle } from "../styles";

export default withProps(
  {
    textAlign: {
      type: String as PropType<TextAlign>,
      required: false,
      default: "left",
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
  (props, context) => h("a", { class: linkStyle(props) }, context.slots)
);
