import { SxProps, Theme } from "@mui/material"
import { BaseText } from "./BaseText"

export interface SmallProps {
  text: string
  color?: string
  sx?: SxProps<Theme>
}

export const Mini = (props: SmallProps) => <BaseText {...props} bdType="mini" />

export const Tiny = (props: SmallProps) => <BaseText {...props} bdType="tiny" />