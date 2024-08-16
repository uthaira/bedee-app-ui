import { Meta } from '@storybook/react'
import { H5 } from '../../components'
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { AuthProvider, useAuth } from '../../authentication'

const AuthenticationContent = () => {
  const { otpToken, accessToken, refreshToken, idToken } = useAuth()

  function createData(
    key: string,
    type: string,
    description: string,
    example: any,
  ) {
    return { key, type, description, example };
  }

  const mockData = {
    isAuthenticated: 'true',
    isRequiredPin: 'false',
    otpToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIrNjY4NDY4MDg5NDgiLCJpYXQiOjE3MjM3ODMzNTIsImV4cCI6MTcyMzc4Mzk1Mn0.jfrYa0L_SPCqh9-S6YIpaLbvyx657DegEsocMJOd9KAUEgg2CFjk3gr1x34VYX9AhAef0s2beNBaNa8feSM0xA',
    accessToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJpc3MiOiJodHRwOi8vd3d3LmJlZGVlLmNvbSIsImN1c3RvbWVySWQiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJlbWFpbCI6bnVsbCwibW9iaWxlIjoiKzY2ODQ2ODA4OTQ4IiwiZ2VuZGVyIjoiRmVtYWxlIiwicHJlZmVycmVkTGFuZ3VhZ2UiOiJ0aCIsInRpdGxlIjoiTXMuIiwiZmlyc3ROYW1lIjoi4Lib4Lin4Li1SWsiLCJsYXN0TmFtZSI6IuC4peC4peC4pSIsImlkQ2FyZCI6IjEzNDExMDAyNDY1MjEiLCJkb2IiOiIxOTkzLTA4LTE2IiwibmF0aW9uYWxpdHkiOiJUSCIsInBhc3Nwb3J0Tm8iOm51bGwsIm5hbWUiOiLguJvguKfguLVJayDguKXguKXguKUiLCJjdXN0b21lclJlcG9ydElkIjoiSUQyNDAwMDAwNTYzNCIsImNyZWF0ZWRBdCI6IjIwMjQtMDgtMDZUMDk6MTg6MzIrMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDI0LTA4LTE2VDAyOjU1OjM3KzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsLCJpc1RyYWNraW5nIjp0cnVlLCJ1c2VySWQiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJwZXJtaXNzaW9ucyI6bnVsbCwicGVybWlzc2lvbkxpc3QiOltdLCJpYXQiOjE3MjM3ODMzNTgsImV4cCI6MTcyMzc4MzcxOH0.KKRHXRhL8W0NXTE4wzM5MOs9LuHnlIqTivXuTbyH_WM23R3VqNCW3zCGQRoEf90jhSm0tH-YKxad7GN1jD5Osw',
    refreshToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJpc3MiOiJodHRwOi8vd3d3LmJlZGVlLmNvbSIsImlhdCI6MTcyMzc4MzM1OCwiZXhwIjoxNzIzODY5NzU4fQ.amhbBtxODbQkzolPLQEXwoEed2JH1WnRq2rCp6hOlpF2EeaEgBxZk-3ehp4UHBdFVO1Lr1dEoFL1LBfiW9KLSw',
    idToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJpc3MiOiJodHRwOi8vd3d3LmJlZGVlLmNvbSIsImN1c3RvbWVySWQiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJlbWFpbCI6bnVsbCwibW9iaWxlIjoiKzY2ODQ2ODA4OTQ4IiwiZ2VuZGVyIjoiRmVtYWxlIiwicHJlZmVycmVkTGFuZ3VhZ2UiOiJ0aCIsInRpdGxlIjoiTXMuIiwiZmlyc3ROYW1lIjoi4Lib4Lin4Li1SWsiLCJsYXN0TmFtZSI6IuC4peC4peC4pSIsImlkQ2FyZCI6IjEzNDExMDAyNDY1MjEiLCJkb2IiOiIxOTkzLTA4LTE2IiwibmF0aW9uYWxpdHkiOiJUSCIsInBhc3Nwb3J0Tm8iOm51bGwsIm5hbWUiOiLguJvguKfguLVJayDguKXguKXguKUiLCJjdXN0b21lclJlcG9ydElkIjoiSUQyNDAwMDAwNTYzNCIsImNyZWF0ZWRBdCI6IjIwMjQtMDgtMDZUMDk6MTg6MzIrMDA6MDAiLCJ1cGRhdGVkQXQiOiIyMDI0LTA4LTE2VDAyOjU1OjM3KzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsLCJpc1RyYWNraW5nIjp0cnVlLCJ1c2VySWQiOiI0YzRmMWEyNi05N2YxLTQ1MjUtOGQ2Ni02NTgyNGM0Yzc1OTYiLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzIzNzgzMzU4LCJleHAiOjE3MjM3ODQzNTh9.P4StjIZlufg2-lm82whR6KqdNhgPNh5Wvj-xe0w1tuAEoQuvzMOwQYlwCibz7jKK5Jyt_nWXYGgRJ8nhC_JeJg'
  }

  const rows = [
    createData('isAuthenticated', 'boolean | null', 'isAuthenticated = true (user is logged in), isAuthenticated = false (user is not logged in)', mockData.isAuthenticated),
    createData('isRequiredPin', 'boolean | null', 'isRequiredPin = true (PIN is required, and the user needs to enter it), isRequiredPin = false (PIN is not required)', mockData.isRequiredPin),
    createData('otpToken', 'string | null', 'otpToken is obtained during login via OTP and is required for logging in with a PIN code', otpToken || mockData.otpToken),
    createData('accessToken', 'string | null', 'accessToken is obtained after logging in with a PIN and is used to fetch data from the API', accessToken || mockData.accessToken),
    createData('refreshToken', 'string | null', 'refreshToken is obtained after logging in with a PIN and is used to acquire a new accessToken', refreshToken || mockData.refreshToken),
    createData('idToken', 'string | null', 'idToken is obtained after logging in with a PIN', idToken || mockData.idToken),
    createData('onRefresh', 'Funtion', 'Funtion for ticker get new authentication data from cookie', ''),
  ];

  return (
    <Container sx={{ height: '100vh', padding: 0, textAlign: 'left' }}>
      <H5 text="Authentication Usage"></H5>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Example</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.key}
                </TableCell>
                <TableCell component="th">
                  {row.type}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left" sx={{ whiteSpace: 'break-spaces', wordWrap: 'break-word', maxWidth: '200px' }}>{row.example}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export const AuthenticationUsage = () => {
  return (
    <AuthProvider>
      <AuthenticationContent />
    </AuthProvider>
  )
}

export default {
  title: 'Sample/Authentication',
  component: AuthenticationUsage,
} as Meta<typeof AuthenticationUsage>
