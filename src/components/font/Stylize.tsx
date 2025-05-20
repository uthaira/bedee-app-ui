import { SxProps, Theme } from '@mui/material/styles'
import { BaseText } from './BaseText'

export interface StylizeProps {
  text: string
  color?: string
  sx?: SxProps<Theme>
}

export const Badges = (props: StylizeProps) => <BaseText {...props} bdType="badges" />

export const BadgesBold = (props: StylizeProps) => <BaseText {...props} bdType="badgesBold" />
