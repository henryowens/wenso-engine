// Button.stories.ts
import { WeText } from "../../components";
import { Story } from "@storybook/vue3";
import { useMeta } from "../utils";

export default useMeta(WeText);

export const Primary: Story = (args) => ({
  components: { WeText },
  setup: () => ({ args }),
  template: `<we-text v-bind="args" />`,
});
Primary.args = {
  textAlign: "right",
};
