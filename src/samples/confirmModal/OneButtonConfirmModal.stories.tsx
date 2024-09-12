import { useState } from "react"
import { Box, Container, styled } from "@mui/material"
import { Meta } from "@storybook/react"
import { ConfirmModal } from "../../components"
import ExampleImgModal from "../../icons/ExampleImgModal"

export const OneButtonConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => setIsOpen(false)

  return (
    <Container>
      <ConfirmModal
        title="One Button Example"
        message="This modal has one primary button."
        image={<ExampleImgModal />}
        isVisible={isOpen}
        isCloseIcon={true}
        handleClose={handleClose}
        textPrimaryButton="Primary Button"
        handleClickPrimary={() => console.log("Primary button clicked")}
      />
    </Container>
  )
}

export default {
  title: "Sample/ConfirmModal",
  component: OneButtonConfirmModal,
} as Meta<typeof OneButtonConfirmModal>

const ModalContainerStyled = styled(Box)(() => ({
  padding: "10px 12px",
}))
