import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { styled } from '@mui/system';
import { Tiny } from '../font';
import { Colors } from '../../colors';
import { ArrowRightProviderBadgeIcon } from '../../icons';

export interface ProviderBadgeProps {
  text: string;
  onClick: () => void;
  withArrow?: boolean;
}

const ProviderBadge = ({
  text,
  onClick,
  withArrow = true,
}: ProviderBadgeProps) => {
  return (
    <Box>
      <Button onClick={onClick} style={{ padding: 0 }}>
        <GradientContainer>
          <TailCircle />
          <VerticalBorderComponent />
          <Box ml={1} maxWidth='84%'>
            <Tiny text={text} color={Colors.white} />
          </Box>
          {withArrow && (
            <Box ml='4px' mr='8px' mt='2px'>
              <ArrowRightProviderBadgeIcon />
            </Box>
          )}
        </GradientContainer>
      </Button>
    </Box>
  );
};

const VerticalBorderComponent = () => {
  const numberOfDashes = 4;
  return (
    <VerticalBorder>
      {Array.from({ length: numberOfDashes }).map((_, index) => (
        <div key={index} />
      ))}
    </VerticalBorder>
  );
};

const GradientContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px 20px 20px 8px',
  background: 'linear-gradient(90deg, #039BE5 0%, #2ECEAD 100%)',
}));

const TailCircle = styled(Box)(() => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: Colors.white,
  position: 'absolute',
  left: -4,
  top: '50%',
  transform: 'translateY(-50%)',
}));

const VerticalBorder = styled(Box)(() => ({
  marginLeft: 14,
  position: 'relative',
  width: '2px',
  height: '100%',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  gap: '2px',

  '& > div': {
    width: '2px', // Width of each dash
    height: '5px', // Height of each dash
    backgroundColor: Colors.white,
    borderRadius: '4px', // Half the height for rounded dashes
  },
}));

export default ProviderBadge;
