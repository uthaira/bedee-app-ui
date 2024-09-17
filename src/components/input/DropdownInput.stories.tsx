import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import DropdownInput from "./DropdownInput"; // Adjust the import path as needed

const meta: Meta<typeof DropdownInput> = {
  title: "Components/DropdownInput",
  component: DropdownInput,
  argTypes: {
    options: { control: "object" },
    label: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownInput>;

export const Default: Story = {
  args: {
    label: "Select an option",
    helperText: "Please select an option from the dropdown",
    placeholder: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    fullWidth: true,
  },
};

export const WithInitialValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("option2");

    return (
      <DropdownInput
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value as any)}
      />
    );
  },
  args: {
    label: "Select an option",
    helperText: "Option 2 is preselected",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    helperText: "This dropdown is disabled",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    disabled: true,
    fullWidth: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Select an option",
    helperText: "An error occurred",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    error: true,
    fullWidth: true,
  },
};

export const WithStyleCustomization: Story = {
  args: {
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    fullWidth: true,
    backgroundColor: "#EAEEF6",
  },
};
