import { Meta, StoryObj } from '@storybook/react';
import SelectionCard from './SelectionCard';
import { IdCardIcon, PassportIcon } from '../../icons';
import Box from '@mui/material/Box'

const meta: Meta<typeof SelectionCard> = {
  title: 'Components/SelectionCard',
  component: SelectionCard,
  argTypes: {
    icon: { control: 'none' },
    title: { control: 'text' },
    selected: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    title: 'Default Title',
    selected: false,
  },
};

export default meta;

type Story = StoryObj<typeof SelectionCard>;

export const Default: Story = {
  args: {
    icon: <IdCardIcon />,
    title: 'บัตรประจำตัวประชาชน',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    icon: <PassportIcon />,
    title: 'พาสปอร์ต',
    selected: true,
  },
};

export const BothStates: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={2}>
      <SelectionCard
        icon={<IdCardIcon />}
        title="บัตรประจำตัวประชาชน"
        selected={true}
        onClick={() => alert('Card 1 clicked')}
      />
      <SelectionCard
        icon={<PassportIcon />}
        title="พาสปอร์ต"
        selected={false}
        onClick={() => alert('Card 2 clicked')}
      />
    </Box>
  ),
};