import { Meta } from '@storybook/react'
import { Container } from '@mui/material'
import { useState } from 'react'
import TabComponent from '../../components/tab/Tab'

export const SampleTab = () => {
  const [activeTab, setTab] = useState('all')

  const handleChangeTab = (tab: string) => {
    setTab(tab)
  }

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
  

  return (
    <Container sx={{ width: '100%' }}>
      <TabComponent
        tabs={tabs}
        active={activeTab}
        handleChangeTab={handleChangeTab}
      />
    </Container>
  )
}

export default {
  title: 'Sample/Tab',
  component: SampleTab,
} as Meta<typeof SampleTab>
