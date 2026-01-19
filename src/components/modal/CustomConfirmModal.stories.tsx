import { Meta, StoryObj } from "@storybook/react"
import CustomConfirmModal from "./CustomConfirmModal"
import ExampleImgModal from "../../icons/ExampleImgModal"

export default {
  title: "Components/CustomConfirmModal",
  component: CustomConfirmModal,
} as Meta<typeof CustomConfirmModal>

type CustomConfirmModalStory = StoryObj<typeof CustomConfirmModal>

export const Default: CustomConfirmModalStory = {
  args: {
    title: "Example Modal Title",
    message: "This is an example message for the CustomConfirmModal component.",
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
