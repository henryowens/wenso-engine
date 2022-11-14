import { Property } from "csstype";
import { px } from "csx";
import { classes, style } from "typestyle";
import { h, PropType } from "vue";

import { Spacings } from "../../../style";
import { useMargin, usePadding } from "../../../style/helpers/spacing";
import { withProps } from "../../../utils/vue";

const typeFontSizeMap = {
  h1: px(55),
  h2: px(42),
  h3: px(32),
  h4: px(28),
  h5: px(22),
  h6: px(18),
  p: px(16),
};

export type TextType = keyof typeof typeFontSizeMap;

export default withProps(
  {
    textAlign: {
      type: String as PropType<Property.TextAlign>,
      required: false,
      default: "left",
    },
  },
  (props) => h("h1", props.textAlign)
);

// export default withProps(
//   {
//     textAlign: {
//       type: String as PropType<
//         | "center"
//         | "end"
//         | "justify"
//         | "left"
//         | "match-parent"
//         | "right"
//         | "start"
//       >,
//       required: false,
//     },
//     type: {
//       type: String as PropType<TextType>,
//       default: "p",
//     },
//     margin: { type: String as PropType<Spacings>, default: "no" },
//     padding: { type: String as PropType<Spacings>, default: "no" },
//     class: { type: String, required: false },
//   },
//   (props, context) =>
//     h(
//       props.type,
//       {
//         class: classes(
//           style({
//             textAlign: props.textAlign || "left",
//             fontSize: typeFontSizeMap[props.type],
//             ...useMargin(props.margin),
//             ...usePadding(props.padding),
//           }),
//           props.class
//         ),
//       },
//       // context.slots
//       "hello world"
//     )
// );
