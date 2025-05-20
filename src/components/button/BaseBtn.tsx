import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Colors } from '../../colors'

export type BdType = 'primary' | 'secondary' | 'outlined' | 'remove'
export type BdSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

export interface ButtonProps extends MuiButtonProps {
  bdType?: BdType
  bdSize?: BdSize
  icon?: JSX.Element
  text?: string | JSX.Element
  loading?: boolean
  width?: string
  isRightIcon?: boolean
  counter?: number
}

const Button = (props: ButtonProps) => {
  const { bdType, icon, text, loading, bdSize, width = '100%', isRightIcon = false, counter, ...rest } = props

  const getTheme = () => {
    switch (bdType) {
      case 'secondary':
        return {
          color: Colors.primary001,
          borderColor: Colors.primary001,
          backgroundColor: Colors.white,
        }
      case 'outlined':
        return {
          color: Colors.primary001,
          borderColor: Colors.white,
          backgroundColor: Colors.white,
        }
      case 'remove':
        return {
          color: Colors.error,
          borderColor: Colors.error,
          backgroundColor: Colors.white,
        }
      default:
        return {
          color: Colors.white,
          borderColor: Colors.primary001,
          backgroundColor: Colors.primary001,
        }
    }
  }

  const getSize = () => {
    switch (bdSize) {
      case 'lg':
        return {
          borderRadius: '32px',
          fontSize: '16px',
          height: '52px',
          icon: 12,
          loading: '18px',
        }
      case 'md':
        return {
          borderRadius: '32px',
          fontSize: '16px',
          height: '48px',
          icon: 12,
          loading: '16px',
        }
      case 'sm':
        return {
          borderRadius: '32px',
          fontSize: '14px',
          height: '40px',
          icon: 12,
          loading: '14px',
        }
      case 'xs':
        return {
          borderRadius: '32px',
          fontSize: '12px',
          height: '30px',
          icon: 12,
          loading: '12px',
        }
      case 'xxs':
        return {
          borderRadius: '32px',
          fontSize: '12px',
          height: '24px',
          icon: 12,
          loading: '12px',
        }
      default:
        return {
          borderRadius: '32px',
          fontSize: '12px',
          height: '30px',
          icon: 12,
          loading: '12px',
        }
    }
  }

  const c = getTheme()
  const s = getSize()
  const iconStyle = {
    width: s.loading,
    height: s.loading,
    border: `2px solid ${c.color}`,
    borderBottomColor: c.backgroundColor,
  }
  const iconImg = loading ? <Loading style={iconStyle} /> : icon

  const displayCounter = counter && (
    <Stack justifyContent="center" alignItems="center" borderRadius="50%" bgcolor={c.color} width={18} height={18}>
      <Typography fontSize={s.fontSize} color={c.backgroundColor}>
        {counter}
      </Typography>
    </Stack>
  )

  return (
    <MuiButton
      sx={{
        borderRadius: s.borderRadius,
        fontSize: s.fontSize,
        fontWeight: 600,
        paddingY: '8px',
        borderColor: c.borderColor,
        backgroundColor: c.backgroundColor,
        width,
        height: s.height,
        '&.MuiButton-outlined': {
          color: c.color,
          backgroundColor: c.backgroundColor,
        },
        '&:hover': {
          borderColor: c.borderColor,
        },
        '&.Mui-disabled': {
          color: c.color,
          backgroundColor: c.backgroundColor,
          opacity: 0.6,
        },
      }}
      variant="outlined"
      {...rest}
    >
      <TextStyled>
        {!isRightIcon && iconImg}
        <Box style={{ color: c.color, fontSize: s.fontSize, fontWeight: 600 }}>{text}</Box>
        {isRightIcon && iconImg}
        {displayCounter}
      </TextStyled>
    </MuiButton>
  )
}

const TextStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '70px',
  columnGap: '8px',
  lineHeight: '16px',
  textTransform: 'none',
}))

const Loading = styled(Box)(() => ({
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: 'rotation 1s linear infinite',

  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}))

export default Button
