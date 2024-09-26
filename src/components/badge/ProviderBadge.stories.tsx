import { Meta, StoryObj } from "@storybook/react";
import ProviderBadge, { ProviderBadgeProps } from "./ProviderBadge";

export default {
  title: "Components/ProviderBadge",
  component: ProviderBadge,
} as Meta<typeof ProviderBadge>;

export const Default: StoryObj<ProviderBadgeProps> = {
  args: {
    text: "Abc 123 campaign",
  },
};
