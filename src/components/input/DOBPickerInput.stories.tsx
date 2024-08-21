import { Meta, StoryObj } from "@storybook/react";
import DOBPicker from "./DOBPickerInput";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const WrappedDOBPicker = (args: any) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DOBPicker {...args} />
  </LocalizationProvider>
);

const meta: Meta<typeof DOBPicker> = {
  title: "Components/DOBPickerInput",
  component: WrappedDOBPicker,
  argTypes: {
    value: {
      control: { type: "date" },
      label: { control: "text" },
      helperText: { control: "text" },
      disabled: { control: "boolean" },
      error: { control: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DOBPicker>;

export const Default: Story = {
  args: {
    label: "Date of birth",
    helperText: "Please select your date of birth",
  },
};

export const WithInitialValue: Story = {
  args: {
    label: "Disabled Dropdown",
    defaultValue: dayjs("2022-01-01"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    helperText: "This dropdown is disabled",
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Select an option",
    helperText: "An error occurred",
    error: true,
  },
};

export const WithStyleCustomization: Story = {
  args: {
    label: "Select an option",
    backgroundColor: "#EAEEF6",
  },
};
