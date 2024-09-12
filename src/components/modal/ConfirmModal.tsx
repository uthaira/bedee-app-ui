import { Box, IconButton, Modal, Stack } from "@mui/material"
import { styled } from "@mui/system"
import { H5, P1 } from "../font"
import { CloseIcon } from "../../icons"
import { BdPrimaryButton, BdSecondaryButton } from "../button"
import neutral from "../../colors/neutral"

interface ConfirmModalProps {
  title: string
  message: string
  isVisible: boolean
  isCloseIcon?: boolean
  handleClose?: () => void
  handleClickPrimary?: () => void
  handleClickSecondary?: () => void
  textPrimaryButton?: string
  textSecondaryButton?: string
  image?: React.ReactNode
}

const ConfirmModal = ({
  title,
  message,
  isVisible,
  isCloseIcon,
  handleClose,
  handleClickPrimary,
  handleClickSecondary,
  textPrimaryButton,
  textSecondaryButton,
  image,
}: ConfirmModalProps) => {
  return (
    <Modal open={isVisible}>
      <ModalStyledBox>
        {isCloseIcon && (
          <XCloseButtonStyled onClick={handleClose}>
            <CloseIcon />
          </XCloseButtonStyled>
        )}

        <Stack gap={2}>
          {image && (
            <Box display="flex" justifyContent="center">
              {image}
            </Box>
          )}
          <ModalContent title={title} message={message} />
          <Stack gap={1}>
            {textPrimaryButton && (
              <BdPrimaryButton
                onClick={handleClickPrimary}
                text={textPrimaryButton}
                bdSize="sm"
              />
            )}
            {textSecondaryButton && (
              <BdSecondaryButton
                onClick={handleClickSecondary}
                text={textSecondaryButton}
                bdSize="sm"
              />
            )}
          </Stack>
        </Stack>
      </ModalStyledBox>
    </Modal>
  )
}

interface ContentProps {
  title: string
  message: string
}

const ModalContent = ({ title, message }: ContentProps) => (
  <Stack marginInline={4} gap={1}>
    <TitleTextStyled text={title} sx={{ whiteSpace: "pre-line" }} />
    <DescriptionTextStyled text={message} />
  </Stack>
)

export default ConfirmModal

const ModalStyledBox = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: neutral.white,
  minWidth: "320px",
  alignItems: "center",
  padding: "64px 16px 16px 16px",
  borderRadius: "12px",
}))

const TitleTextStyled = styled(H5)(() => ({
  color: "#3A4248",
  textAlign: "center",
}))

const DescriptionTextStyled = styled(P1)(() => ({
  color: "#4A5568",
  display: "flex",
  textAlign: "center",
  whiteSpace: "pre-line"
}))

const XCloseButtonStyled = styled(IconButton)(() => ({
  position: "absolute",
  borderRadius: "50%",
  width: 32,
  height: 32,
  minWidth: 0,
  padding: 0,
  top: 16,
  right: 16,
  backgroundColor: "#EAEEF6",
  color: "#323A43",
  "&:hover": {
    backgroundColor: "rgba(234, 238, 246, 0.7)",
  },
}))
