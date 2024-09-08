import { useContext, createContext } from "react";

export const ModalContext = createContext({
    isModalOpen: false,
    closeModal: () => {}
})

export const ModalProvider = ModalContext.Provider

export default function useModal() {
    return useContext(ModalContext)
}