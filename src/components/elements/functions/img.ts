import { h, PropType } from "vue";

import { imgStyle } from "../styles";
import { withProps } from "../../../utils/vue";
import { Spacings } from "@/style";

export default withProps(
  {
    src: {
      type: String,
      required: true,
    },
    margin: {
      type: String as PropType<Spacings>,
      required: false,
      default: "no",
    },
  },
  (props, _) => h("img", { src: props.src, class: imgStyle(props.margin) })
);
