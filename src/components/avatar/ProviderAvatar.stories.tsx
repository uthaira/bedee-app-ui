import { Meta, StoryObj } from "@storybook/react";
import ProviderAvatar, { ProviderAvatarProps } from "./ProviderAvatar";

export default {
  title: "Components/ProviderAvatar",
  component: ProviderAvatar,
} as Meta<typeof ProviderAvatar>;

export const Default: StoryObj<ProviderAvatarProps> = {
  args: {
    width: "60px",
    height: "60px",
    imageUrl: "https://www.bdms.co.th/images/logo.png",
    // hidIcon: false,
    // customIcon: "Abc 123 campaign",
  },
};
