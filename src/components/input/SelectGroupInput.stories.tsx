import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SelectionGroupInput from "./SelectGroupInput";

const meta: Meta<typeof SelectionGroupInput> = {
  title: "Components/SelectionGroupInput",
  component: SelectionGroupInput,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectionGroupInput>;

export const Default: Story = {
  args: {
    name: "gender",
    options: [
      { value: "male", label: "ชาย" },
      { value: "female", label: "หญิง" },
      { value: "other", label: "ไม่ระบุ" },
    ],
    label: "เลือกเพศ",
    exclusive: true,
  },
};

export const WithInitialValue: Story = {
  render: (args) => {
    const [value, setValue] = useState("female");

    return (
      <SelectionGroupInput
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    name: "gender",
    options: [
      { value: "male", label: "ชาย" },
      { value: "female", label: "หญิง" },
      { value: "other", label: "ไม่ระบุ" },
    ],
    label: "เลือกเพศ",
    exclusive: true,
  },
};

export const ErrorState: Story = {
  args: {
    name: "gender",
    options: [
      { value: "male", label: "ชาย" },
      { value: "female", label: "หญิง" },
      { value: "other", label: "ไม่ระบุ" },
    ],
    label: "เลือกเพศ",
    exclusive: true,
    error: true,
    helperText: "An error occurred",
  },
};
