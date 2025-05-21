import React, { useRef, useState, useCallback } from 'react'
import Webcam from 'react-webcam'
import { Box, styled } from '@mui/material'
import CameraFrame from './CameraFrame'

import { useViewportHeight, useCameraViewport } from '../../hooks'
import { Colors } from '../../colors'
import { H3, P1 } from '../font'

import IdCardFrame from './IdCardFrame'

enum EFacingMode {
  USER = 'user',
  ENVIRONMENT = 'environment',
}

interface Content {
  captureInstruction: string
  placementInstruction: string
  cameraOverlayFrame: JSX.Element
}

interface KycCameraProps {
  isReady: boolean
  onTakePhoto?: (photoBase64: string) => void
  onSelectGallery?: (photoBase64: string, mimeType: string, extension: string) => void
  content?: Content
  textGallery?: string
  isGallery?: boolean
}

const KycCamera: React.FC<KycCameraProps> = ({
  isReady,
  onSelectGallery,
  onTakePhoto,
  textGallery = 'Gallery',
  isGallery = true,
  content = {
    captureInstruction: 'ถ่ายรูปหน้า\nบัตรประชาชน',
    placementInstruction: 'วางบัตรประชาชนของคุณในกรอบ\nโดยถ่ายให้เห็นข้อมูลชัดเจน ไม่เบลอ',
    cameraOverlayFrame: <IdCardFrame />,
  },
}) => {
  const webcamRef = useRef<Webcam | null>(null)
  const [facingMode, setFacingMode] = useState<EFacingMode>(EFacingMode.ENVIRONMENT)

  const photoInputRef = useRef<HTMLInputElement>(null)

  const viewportHeight = useViewportHeight()
  const { height: cameraViewportHeight, width: cameraViewportWidth } = useCameraViewport()

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      if (imageSrc) {
        const img = new Image()
        img.src = imageSrc

        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')

          if (ctx) {
            const zoomFactor = 1.1

            canvas.width = cameraViewportWidth
            canvas.height = cameraViewportHeight

            const sw = cameraViewportWidth / zoomFactor
            const sh = cameraViewportHeight / zoomFactor

            const sx = (img.width - sw) / 2
            const sy = (img.height - sh) / 2

            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height)

            const croppedImageSrc = canvas.toDataURL('image/jpeg', 1.0)

            onTakePhoto?.(croppedImageSrc)
          }
        }
      }
    }
  }, [cameraViewportWidth, cameraViewportHeight, webcamRef])

  const onGallery = useCallback(() => {
    photoInputRef?.current?.click()
  }, [photoInputRef])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      let newFileName = file.name

      if (newFileName.startsWith('image.')) {
        const fileExtension = newFileName.split('.').pop()
        const baseFileName = newFileName.replace(`.${fileExtension}`, '')
        newFileName = `${baseFileName}_${Date.now()}.${fileExtension}`
      }

      const newFile = new File([file], newFileName, { type: file.type })

      const reader = new FileReader()
      reader.onloadend = () => {
        const fileBase64 = reader.result as string
        onSelectGallery?.(fileBase64, file.type, file.name.split('.').pop() || 'jpg')
      }
      reader.readAsDataURL(newFile)
    }
  }

  return (
    <StyledContainer>
      {isReady && (
        <Webcam
          audio={false}
          autoPlay={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          videoConstraints={{
            facingMode,
            aspectRatio: 16 / 9,
            width: { ideal: 1280 },
            height: { ideal: 720 },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      )}

      <CameraFrame
        onFacingMode={setFacingMode}
        onGallery={onGallery}
        onCapture={handleCapture}
        textGallery={textGallery}
        isGallery={isGallery}
        cameraViewPortHeight={cameraViewportHeight}
        viewportHeight={viewportHeight}
        captureInstruction={
          <H3
            text={content?.captureInstruction}
            color={Colors.white}
            sx={{
              fontWeight: 600,
              fontSize: '34px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          />
        }
        placementInstruction={
          <P1
            text={content?.placementInstruction}
            color={Colors.white}
            sx={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              textAlign: 'center',
            }}
          />
        }
        cameraOverlayFrame={content?.cameraOverlayFrame}
      />

      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={photoInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </StyledContainer>
  )
}

const StyledContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'calc(var(--vh, 1vh) * 100)',
  width: '100%',
  maxWidth: '520px',
  overflow: 'hidden',
  margin: '0 auto',
}))

export default KycCamera
