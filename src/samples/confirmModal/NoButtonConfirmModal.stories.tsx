import { useState } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { styled } from '@mui/material/styles';
import { Meta } from "@storybook/react"
import { ConfirmModal } from "../../components"

export const NoButtonConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => setIsOpen(false)

  return (
    <Container>
      <ConfirmModal
        title="No Buttons Example"
        message="This is a modal without any buttons."
        isVisible={isOpen}
        isCloseIcon={true}
        handleClose={handleClose}
      />
    </Container>
  )
}

export default {
  title: "Sample/ConfirmModal",
  component: NoButtonConfirmModal,
} as Meta<typeof NoButtonConfirmModal>

const ModalContainerStyled = styled(Box)(() => ({
  padding: "10px 12px",
}))
