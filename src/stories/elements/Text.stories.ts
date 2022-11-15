// Button.stories.ts
import { WeText } from "../../components";
import { Story } from "@storybook/vue3";
import { useMeta } from "../utils";

export default useMeta({
  component: WeText,
  argTypes: {
    textAlign: {
      options: [
        "center",
        "end",
        "justify",
        "left",
        "match-parent",
        "right",
        "start",
      ],
      control: { type: "select" },
      name: "Text Align",
    },
    text: {
      name: "Text",
      defaultValue: "Hello World",
      type: "string",
    },
    type: {
      name: "Type",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      defaultValue: "p",
      control: { type: "select" },
    },
  },
});

export const Primary: Story = (args) => ({
  components: { WeText },
  setup: () => ({ args }),
  template: `<we-text v-bind="args">{{ args.text }}</we-text>`,
});
Primary.args = {
  textAlign: "right",
};
