import { Meta, StoryObj } from "@storybook/react"
import Tab from "./Tab"

export default {
  title: "Components/Tab",
  component: Tab,
} as Meta<typeof Tab>

type TabStory = StoryObj<typeof Tab>

const tabs = [
  {
    value: 'all',
    label: 'ทั้งหมด',
  },
  {
    value: 'doctor',
    label: 'หมอ',
  },
  {
    value: 'alliedHealth',
    label: 'ปรึกษาผู้เชี่ยวชาญ',
  },
];

export const Default: TabStory = {
  args: {
    tabs,
    active: 'all',
    handleChangeTab: (tab: any) => {
      console.log('tab',tab)
    },
    centered: true,
    variant: 'fullWidth',
  },
}
