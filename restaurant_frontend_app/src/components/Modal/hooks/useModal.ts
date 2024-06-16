import { useState } from "react";

export type ModalHook = {
    value: boolean;
    open: () => void;
    hide: () => void;
    toggle: () => void;
};
const useModal = (): ModalHook => {
    //#region States
    const [show, setShow] = useState(false);
    //#endregion
    //#region Functions
    const toggle = () => {
        setShow(prev => !prev);
    }
    //#endregion
    return { 
        value: show, 
        open: () => setShow(true),
        hide: () => setShow(false),
        toggle
    }; 
}

export default useModal;