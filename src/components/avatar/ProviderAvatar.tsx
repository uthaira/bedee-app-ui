import { Box } from '@mui/system'
import { ProviderIcon } from '../../icons'
import { Colors } from '../../colors'

export interface ProviderAvatarProps {
  width?: string
  height?: string
  imageUrl?: string
  hidIcon?: boolean
  customIcon?: React.ReactNode
}

const ProviderAvatar = (props: ProviderAvatarProps) => {
  const { width = '50px', height = '50px', imageUrl, hidIcon = false, customIcon } = props
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        component="div"
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
      {!hidIcon &&
        (customIcon ? (
          customIcon
        ) : (
          <Box
            sx={{
              position: 'absolute',
              bottom: '-8px',
              right: '-2px',
            }}
          >
            <ProviderIcon />
          </Box>
        ))}
    </Box>
  )
}

export default ProviderAvatar
