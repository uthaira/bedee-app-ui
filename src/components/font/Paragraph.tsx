import { SxProps, Theme } from "@mui/material"
import { BaseText } from "./BaseText"

export interface ParagraphProps {
  text: string
  color?: string
  sx?: SxProps<Theme>
}

export const P1 = (props: ParagraphProps) => <BaseText {...props} bdType="p1" />

export const P2 = (props: ParagraphProps) => <BaseText {...props} bdType="p2" />

export const Lead1 = (props: ParagraphProps) => <BaseText {...props} bdType="lead1" />

export const Lead2 = (props: ParagraphProps) => <BaseText {...props} bdType="lead2" />

export const Header1 = (props: ParagraphProps) => <BaseText {...props} bdType="header1" />