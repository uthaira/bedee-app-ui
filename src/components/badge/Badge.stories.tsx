import { Meta, StoryObj } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const Default: StoryObj<BadgeProps> = {
  args: {
    color: "#ccc",
    icon: <span>🐶</span>,
    text: "Dog",
  },
};

export const Outlined: StoryObj<BadgeProps> = {
  args: {
    color: "black",
    icon: <span>🐶</span>,
    text: "Dog",
    variant: "outlined",
  },
};

export const CustomColor: StoryObj<BadgeProps> = {
  args: {
    color: "lightgreen",
    icon: <span>🐱</span>,
    text: "Cat",
  },
};

export const WithoutIcon: StoryObj<BadgeProps> = {
  args: {
    color: "red",
    text: "Error",
  },
};

export const withSx: StoryObj<BadgeProps> = {
  args: {
    color: "lightgreen",
    icon: <span>🐱</span>,
    text: "Cat",
    sx: {
      borderRadius: "32px",
      p: "8px 16px",
    },
  },
};
