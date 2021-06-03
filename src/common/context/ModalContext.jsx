import {createContext} from "react";

function noop(){}

export const ModalContext = createContext({
    modalVisibility: false,
    setModalVisibility: noop,
    modalContent: null,
    setModalContent: noop
})
