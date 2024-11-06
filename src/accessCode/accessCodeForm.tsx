import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { BaseText, BdPrimaryButton, TextInput } from '../components'
import { Colors } from '../colors'

interface AccessCodeFormProps {
  accessCode: string
  onSuccess: () => void
}

const AccessCodeForm = (props: AccessCodeFormProps) => {
  const { accessCode, onSuccess } = props

  const [inputCode, setInputCode] = useState('')
  const [error, setError] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value)
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (accessCode === inputCode) {
      onSuccess()
    } else {
      setError('Incorrect Access Code')
      setInputCode('')
    }
  }

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        maxWidth: 300,
        margin: 'auto',
        marginTop: '24px',
        borderRadius: 2,
      }}
    >
      <BaseText text="Access Code" sx={{ fontSize: 24, color: Colors.primary001, alignSelf: 'flex-start' }} />
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', marginTop: '24px' }}>
          <TextInput
            type="password"
            value={inputCode}
            onChange={onInputChange}
            placeholder="Enter Access Code"
            error={!!error}
            helperText={error ?? ''}
          />
        </Box>
        <Box sx={{ width: '100%', marginTop: '24px' }}>
          <BdPrimaryButton type="submit" text="Submit" bdSize="lg" disabled={!inputCode} />
        </Box>
      </form>
    </Box>
  )
}

export default AccessCodeForm
