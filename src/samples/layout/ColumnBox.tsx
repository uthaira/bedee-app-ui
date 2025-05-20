import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Box = (props: any) => {
  const { title, children, color } = props

  return (
    <View>
      <Title>
        <Typography color={color}>{title}</Typography>
      </Title>
      <ContentView>{children}</ContentView>
    </View>
  )
}

const View = styled('div')({
  width: '100%',
})

const Title = styled('div')({
  width: '100%',
  marginBottom: '8px',
})

const ContentView = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  width: '100%',
})

export default Box
