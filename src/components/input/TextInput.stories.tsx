import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput"; // Adjust this import path as needed

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email.",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    error: true,
    helperText: "Password must be at least 8 characters long.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
  },
};

export const WithStyleCustomizationText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    backgroundColor: "#EAEEF6",
  },
};
