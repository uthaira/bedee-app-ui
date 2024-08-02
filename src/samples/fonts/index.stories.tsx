import { Grid } from '@mui/material'
import { ColumnBox } from '../layout'
import { Meta } from '@storybook/react'
import { Colors } from '../../colors'
import { H1, H2, H3, H4, H5, H6, Lead1, Lead2, Mini, P1, P2, Tiny } from '../../components/font'

const fontCategories = [
  {
    title: 'H',
    items: [
      { text: '>>MD(Dest)/H/H1', Component: H1 },
      { text: '>>MD(Dest)/H/H2', Component: H2 },
      { text: '>>MD(Dest)/H/H3', Component: H3 },
      { text: '>>MD(Dest)/H/H4', Component: H4 },
      { text: '>>MD(Dest)/H/H5', Component: H5 },
      { text: '>>MD(Dest)/H/H6', Component: H6 },
    ],
    gridProps: { xs: 6, md: 6 },
  },
  {
    title: 'P',
    items: [
      { text: '>>MD(Dest)/P/P1', Component: P1 },
      { text: '>>MD(Dest)/P/P2', Component: P2 },
      { text: '>>MD(Dest)/P/Lead1', Component: Lead1 },
      { text: '>>MD(Dest)/P/Lead2', Component: Lead2 },
    ],
    gridProps: { xs: 3, md: 3 },
  },
  {
    title: 'Small',
    items: [
      { text: '>>MD(Dest)/Small/Mini', Component: Mini },
      { text: '>>MD(Dest)/Small/Tiny', Component: Tiny },
    ],
    gridProps: { xs: 3, md: 3 },
  },
]

export const SampleFonts = () => (
  <Grid container spacing={2}>
    {fontCategories.map(({ title, items, gridProps }, index) => (
      <Grid item {...gridProps} key={index}>
        <ColumnBox title={title} color={Colors.black}>
          {items.map(({ text, Component }, index) => (
            <Component key={index} text={text} />
          ))}
        </ColumnBox>
      </Grid>
    ))}
  </Grid>
)

export default {
  title: 'Sample/Fonts',
  component: SampleFonts,
} as Meta<typeof SampleFonts>
