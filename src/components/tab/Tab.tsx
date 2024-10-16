import { Box, styled, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Colors } from '../../colors';

interface ITabItems {
  value?: any;
  label?: any;
}

interface IProviderTabProps {
  active?: any;
  tabs?: ITabItems[];
  handleChangeTab?: (tab: any) => void;
  centered?: boolean;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
}

const TabComponent: React.FC<IProviderTabProps> = (
  props: IProviderTabProps
) => {
  const {
    tabs = [],
    active,
    handleChangeTab = () => {},
    centered = true,
    variant = 'fullWidth',
  } = props;

  const handleChange = (event: React.SyntheticEvent, tab: any) => {
    handleChangeTab(tab);
  };

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: Colors.gray3 }}>
      <CustomTabs
        variant={variant}
        value={active}
        onChange={handleChange}
        centered={centered}
      >
        {tabs.map((item, index) => {
          return (
            <TabItem
              value={item.value}
              label={item.label}
              {...a11yProps(index)}
              key={index}
            />
          );
        })}
      </CustomTabs>
    </Box>
  );
};

export default TabComponent;

const CustomTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: `${Colors.primary001}`,
    height: '4px',
  },
});

const TabItem = styled(Tab)({
  color: `${Colors.gray7}`,
  fontWeight: 400,
  '&.Mui-selected': {
    color: `${Colors.primary001}`,
    fontWeight: 600,
  },
  fontSize: '16px',
  whiteSpace: 'nowrap',
});
