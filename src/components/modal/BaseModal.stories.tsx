import { Meta, StoryObj } from "@storybook/react"
import BaseModal from "./BaseModal"
import ExampleImgModal from "../../icons/ExampleImgModal"

export default {
  title: "Components/BaseModal",
  component: BaseModal,
} as Meta<typeof BaseModal>

type BaseModalStory = StoryObj<typeof BaseModal>

export const Default: BaseModalStory = {
  args: {
    title: "Example Modal Title",
    message: "This is an example message for the BaseModal component.",
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
