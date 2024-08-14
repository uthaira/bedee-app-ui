import React, { useState, useEffect, useRef, FC, useMemo } from 'react';
import {
  Menu,
  Box,
  Button,
  Typography,
  MenuItem,
  MenuProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Colors } from '../../colors';
import { DEFAULT_COUNTRY_PHONE } from '../../constanst/mockData';

export interface ICountriesPhone {
  id: string;
  flag: string;
  flagIcon: string;
  countryName: string;
  phoneCode: string;
  countryCode: string;
  region: string | null;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface InternationalPhoneProps {
  onChange?: (country: ICountriesPhone) => void;
  defaultCountry?: ICountriesPhone;
  countryList: ICountriesPhone[];
}

const SCROLL_POSITION_TO_SEE_DEFAULT_COUNTRY = 59;

const InternationalPhone: FC<InternationalPhoneProps> = ({
  onChange,
  defaultCountry = DEFAULT_COUNTRY_PHONE,
  countryList = [],
}) => {
  const [selectedCountry, setSelectedCountry] =
    useState<ICountriesPhone>(defaultCountry);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const countryListRef = useRef<HTMLUListElement>(null);

  const getFlag = (flagCode: string): string => {
    const unicodeArray = flagCode
      .split(' ')
      .map((code) => code.replace('U+', ''));
    const charString = unicodeArray
      .map((code) => String.fromCodePoint(parseInt(code, 16)))
      .join('');

    return charString;
  };

  const defaultCountryIndex = useMemo(() => {
    if (countryList?.length) {
      return countryList.findIndex((country: ICountriesPhone) => {
        return country.countryName === DEFAULT_COUNTRY_PHONE.countryName;
      });
    }
    return 0;
  }, [countryList]);

  const handleItemClick = (country: ICountriesPhone) => {
    setSelectedCountry(country);
    onChange?.(country);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isOpen && countryListRef.current) {
      countryListRef.current.scrollTop =
        SCROLL_POSITION_TO_SEE_DEFAULT_COUNTRY * defaultCountryIndex;
    }
  }, [isOpen, defaultCountryIndex]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display='flex' alignItems='center'>
      <div>
        <Button
          aria-controls={isOpen ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={isOpen ? 'true' : undefined}
          variant='text'
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon sx={{ color: Colors.black }} />}
        >
          <Box display='flex' gap={1} paddingLeft='4px' alignItems='center'>
            {getFlag(selectedCountry.flag)}
          </Box>
        </Button>
        <StyledMenu
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
        >
          {countryList.map((country) => {
            const { countryName, flag, phoneCode } = country;
            const flagIcon = getFlag(flag);
            return (
              <MenuItem
                key={country.id}
                selected={country.id === selectedCountry.id}
                onClick={() => handleItemClick(country)}
              >
                <Box display='flex' gap={2} alignItems='center'>
                  <Box height='33px' fontSize={25}>
                    {flagIcon}
                  </Box>
                  <Box
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                    maxWidth='220px'
                  >
                    {countryName}
                  </Box>
                  <Box>({phoneCode})</Box>
                </Box>
              </MenuItem>
            );
          })}
        </StyledMenu>
      </div>
      <Typography
        data-testid='international-selected-code'
        fontWeight='500'
        fontSize='16px'
        borderLeft='1px solid #c3cad4'
        margin='6px 10px'
        paddingLeft='12px'
        lineHeight='30px'
      >
        ({selectedCountry.phoneCode})
      </Typography>
    </Box>
  );
};

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: 4,
    maxHeight: 400,
    width: 300,
    border: `1px solid ${Colors.gray1}`,
    '& .MuiMenu-list': {
      padding: '0',
    },
  },
});

export default InternationalPhone;
