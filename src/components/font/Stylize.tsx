import { BaseText } from './BaseText'

export interface StylizeProps {
  text: string
  color?: string
}

export const Badges = (props: StylizeProps) => <BaseText {...props} bdType="badges" />

export const BadgesBold = (props: StylizeProps) => <BaseText {...props} bdType="badgesBold" />
