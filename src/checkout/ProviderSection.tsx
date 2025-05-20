import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { H6, Lead1, P2 } from '../components'
import React from 'react'
import { ProviderAvatar } from '../components/avatar'
import { Format } from '../utils'
import { BGProviderIcon, ConsultIcon } from '../icons'
import { Colors } from '../colors'

interface ProviderInfoProps {
  positionName?: string
  fullName?: string
  netConsultationFee?: number
  consultationTime?: number
  photo?: string
  title?: string
  unitMins?: string
  hideTitle?: boolean
}

const ProviderSection: React.FC<ProviderInfoProps> = (props) => {
  const {
    positionName = '',
    fullName = '',
    photo,
    title = 'ปรึกษาออนไลน์',
    unitMins = 'นาที',
    netConsultationFee = 0,
    consultationTime = 0,
    hideTitle = false,
  } = props

  return (
    <Box
      sx={{
        padding: '18px',
        backgroundColor: Colors.white,
      }}
    >
      {!hideTitle && (
        <Stack direction="row" alignItems="center" gap={'12px'}>
          <ConsultIcon />
          <H6 text={title} />
        </Stack>
      )}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(276.02deg,rgba(184, 202, 246, 0.4) 1.62%,rgba(230, 237, 255, 0.4) 89.69%)',
          padding: '10px 14px',
          marginTop: '10px',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            position: 'relative',
          }}
        >
          <Stack direction="row" alignItems="center" gap={'30px'}>
            <ProviderAvatar imageUrl={photo} width="64px" height="64px" />
            <Stack direction="column" alignItems="start" gap={'5px'}>
              <Lead1 text={fullName} />
              <P2 text={positionName} />
              <Lead1 text={`${Format.formatPrice(netConsultationFee)}/${consultationTime} ${unitMins}`} />
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: 0,
            height: '82px',
            width: '103px',
          }}
        >
          <BGProviderIcon height={82} />
        </Box>
      </Box>
    </Box>
  )
}

export default ProviderSection
