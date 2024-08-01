import { Typography, styled } from '@mui/material'

const Box = (props: any) => {
  const { title, children } = props

  return (
    <View>
      <Title>
        <Typography>{title}</Typography>
      </Title>
      <ContentView>
        {children}
      </ContentView>
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