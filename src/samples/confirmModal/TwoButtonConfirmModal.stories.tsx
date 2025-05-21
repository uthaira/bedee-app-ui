import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { styled } from '@mui/material/styles';
import { Meta } from "@storybook/react"
import { ConfirmModal } from "../../components"

export const TwoButtonConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => setIsOpen(false)

  return (
    <Container>
      <ConfirmModal
        title="Two Buttons Example"
        message="This modal has both primary and secondary buttons."
        isVisible={isOpen}
        isCloseIcon={true}
        handleClose={handleClose}
        textPrimaryButton="Primary Button"
        textSecondaryButton="Secondary Button"
        handleClickPrimary={() => console.log("Primary button clicked")}
        handleClickSecondary={() => console.log("Secondary button clicked")}
      />
    </Container>
  )
}

export default {
  title: "Sample/ConfirmModal", // Keep the same title for grouping
  component: TwoButtonConfirmModal,
} as Meta<typeof TwoButtonConfirmModal>

const ModalContainerStyled = styled(Box)(() => ({
  padding: "10px 12px",
}))
