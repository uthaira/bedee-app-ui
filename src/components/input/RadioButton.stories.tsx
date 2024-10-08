import { Colors } from "../../colors";
import RadioButton from "./RadioButton";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    value: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    message: {
      control: { type: 'text' },
      defaultValue: 'This is a radio button',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as Meta<typeof RadioButton>

type Story = StoryObj<typeof RadioButton>;
export const Default: Story = {

}

export const Checked: Story = {
  args: {
    value: true
  }
}

export const customColor: Story = {
  args: {
    unCheckStyle: {
      border: "1px solid rgba(195, 202, 212, 1)",
      backgroundColor: Colors.white
    }
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithError: Story = {
  args: {
    errorMessage: 'This is an error message'
  }
}
