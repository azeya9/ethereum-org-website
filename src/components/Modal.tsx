import React from "react"

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react"

export interface IPropsOverlay {
  isActive: boolean
}

export interface IProps {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<IProps> = ({ children, isOpen, setIsOpen, ...props }) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      isCentered
      size="xl"
      {...props}
    >
      <ModalOverlay bgColor="blackAlpha.700" />

      <ModalContent
        p="2rem"
        shadow="md"
        border="1px"
        borderColor="ActiveBorder"
        borderRadius="md"
      >
        <ModalCloseButton />
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
