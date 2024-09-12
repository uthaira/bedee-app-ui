import { Meta, StoryObj } from "@storybook/react"
import ConfirmModal from "./ConfirmModal"
import ExampleImgModal from "../../icons/ExampleImgModal"

export default {
  title: "Components/ConfirmModal",
  component: ConfirmModal,
} as Meta<typeof ConfirmModal>

type ConfirmModalStory = StoryObj<typeof ConfirmModal>

export const Default: ConfirmModalStory = {
  args: {
    title: "Example Modal Title",
    message: "This is an example message for the ConfirmModal component.",
    isVisible: true,
    isCloseIcon: true,
    handleClose: () => console.log("Modal closed"),
    textPrimaryButton: "Primary Action",
    textSecondaryButton: "Secondary Action",
    handleClickPrimary: () => console.log("Primary button clicked"),
    handleClickSecondary: () => console.log("Secondary button clicked"),
    image: <ExampleImgModal />,
  },
}
