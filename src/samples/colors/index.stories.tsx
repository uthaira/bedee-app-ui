import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { ColumnBox } from '../layout'
import { Meta } from '@storybook/react'
import { Colors } from '../../colors'
import { P1 } from '../../components/font'

interface Color {
  text: string
  bgColor: string
  textColor: string
}

const ColorStack = ({ text, bgColor, textColor }: Color) => (
  <Stack justifyContent="center" alignItems="center" height={30} borderRadius={12} bgcolor={bgColor}>
    <P1 text={text} color={textColor} />
  </Stack>
)

const ColorGridItem = ({ title, colors }: { title: string; colors: Color[] }) => (
  <Grid item xs={3} md={3}>
    <ColumnBox title={title}>
      {colors.map((color, index) => (
        <ColorStack key={index} {...color} />
      ))}
    </ColumnBox>
  </Grid>
)

export const SampleColors = () => {
  return (
    <Grid container spacing={2}>
      <ColorGridItem title="Neutral" colors={neutralColors} />
      <ColorGridItem title="Grayscale" colors={grayscaleColors} />
      <ColorGridItem title="Primary" colors={primaryColors} />
      <ColorGridItem title="Secondary" colors={secondaryColors} />
      <ColorGridItem title="Trinary" colors={trinaryColors} />
      <ColorGridItem title="Brand" colors={brandColors} />
      <ColorGridItem title="Functional" colors={functionalColors} />
    </Grid>
  )
}

const neutralColors: Color[] = [
  { text: 'Black', bgColor: Colors.black, textColor: Colors.white },
  { text: 'White', bgColor: Colors.white, textColor: Colors.black },
]

const grayscaleColors: Color[] = [
  { text: 'Gray0', bgColor: Colors.gray0, textColor: Colors.white },
  { text: 'Gray1', bgColor: Colors.gray1, textColor: Colors.white },
  { text: 'Gray2', bgColor: Colors.gray2, textColor: Colors.white },
  { text: 'Gray3', bgColor: Colors.gray3, textColor: Colors.white },
  { text: 'Gray4', bgColor: Colors.gray4, textColor: Colors.white },
  { text: 'Gray5', bgColor: Colors.gray5, textColor: Colors.white },
  { text: 'Gray6', bgColor: Colors.gray6, textColor: Colors.white },
  { text: 'Gray7', bgColor: Colors.gray7, textColor: Colors.white },
]

const primaryColors: Color[] = [
  { text: 'Primary001', bgColor: Colors.primary001, textColor: Colors.black },
  { text: 'Primary002', bgColor: Colors.primary002, textColor: Colors.black },
  { text: 'Primary003', bgColor: Colors.primary003, textColor: Colors.black },
  { text: 'Primary004', bgColor: Colors.primary004, textColor: Colors.black },
  { text: 'Primary005', bgColor: Colors.primary005, textColor: Colors.black },
  { text: 'Primary006', bgColor: Colors.primary006, textColor: Colors.black },
]

const secondaryColors: Color[] = [
  { text: 'Secondary001', bgColor: Colors.secondary001, textColor: Colors.black },
  { text: 'Secondary002', bgColor: Colors.secondary002, textColor: Colors.black },
  { text: 'Secondary003', bgColor: Colors.secondary003, textColor: Colors.black },
  { text: 'Secondary004', bgColor: Colors.secondary004, textColor: Colors.black },
  { text: 'Secondary005', bgColor: Colors.secondary005, textColor: Colors.black },
]

const trinaryColors: Color[] = [
  { text: 'Trinary001', bgColor: Colors.trinary001, textColor: Colors.black },
  { text: 'Trinary002', bgColor: Colors.trinary002, textColor: Colors.black },
  { text: 'Trinary003', bgColor: Colors.trinary003, textColor: Colors.black },
  { text: 'Trinary004', bgColor: Colors.trinary004, textColor: Colors.black },
  { text: 'Trinary005', bgColor: Colors.trinary005, textColor: Colors.black },
]

const brandColors: Color[] = [
  { text: 'Dark blue', bgColor: Colors.darkBlue, textColor: Colors.white },
  { text: 'Royal blue', bgColor: Colors.royalBlue, textColor: Colors.white },
  { text: 'Cherry', bgColor: Colors.cherry, textColor: Colors.white },
  { text: 'Off white', bgColor: Colors.offWhite, textColor: Colors.black },
]

const functionalColors: Color[] = [
  { text: 'Complete', bgColor: Colors.completed, textColor: Colors.white },
  { text: 'Success', bgColor: Colors.success, textColor: Colors.white },
  { text: 'Pending', bgColor: Colors.pending, textColor: Colors.white },
  { text: 'Error', bgColor: Colors.error, textColor: Colors.white },
  { text: 'Warning', bgColor: Colors.warning, textColor: Colors.white },
]

export default {
  title: 'Sample/Colors',
  component: SampleColors,
} as Meta<typeof SampleColors>
