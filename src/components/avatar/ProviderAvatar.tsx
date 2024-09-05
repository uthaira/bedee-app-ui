import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { ProviderIcon } from '../../icons';
import { Colors } from '../../colors';

interface PersonalImageProps {
  width?: string;
  height?: string;
  imageUrl?: string;
  hidIcon?: boolean
  customIcon?: React.ReactNode;
}

const ProviderAvatar = (props: PersonalImageProps) => {
  const { width = '50px', height = '50px', imageUrl, hidIcon = false, customIcon } = props;
  return (
    <PersonalImageWrapper>
      <Box
        component='div'
        sx={{
          width,
          height,
          backgroundColor: Colors.gray2,
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          borderRadius: '50%',
          position: 'relative',
        }}
      />
      {!hidIcon && (
        customIcon ? customIcon :
          <ProviderIconWrapper>
            <ProviderIcon />
          </ProviderIconWrapper>
      )}
    </PersonalImageWrapper>
  );
};

export default ProviderAvatar;

export const PersonalImageWrapper = styled('div')`
  position: relative;
`;

export const ProviderIconWrapper = styled('div')`
  position: absolute;
  bottom: -8px;
  right: -2px;
`;