import { createPortal } from "react-dom";
import { Window, Container, CloseButton } from "./styles";
import useBodyScrollByPortalElements from "../../hooks/useBodyScrollByPortalElements";
import { ModalHook } from "./hooks/useModal";
import { ReactNode } from "react";
import PORTAL_WRAPPER_ID from "../../utils/constants";
import CrossIcon from "../../icons/CrossIcon";

export type ModalProps = {
    modal: ModalHook;
    className?: string;
    children: ReactNode;
};
const $portals = document.getElementById(PORTAL_WRAPPER_ID);
const Modal = ({
    modal, className, children
}: ModalProps) => {
    useBodyScrollByPortalElements(modal.value);
    const getClassName = (): string => {
        const classList = [];
        if (!modal.value)
            classList.push("hidden");
        return classList.join(" ");
    }
    return createPortal(
        <Container 
            className={getClassName()}
            onClick={modal.hide}>
            <Window className={className} onClick={e => e.stopPropagation()}>
                <CloseButton onClick={modal.hide}>
                    <CrossIcon/>
                </CloseButton>
                {children}
            </Window>
        </Container>, 
        $portals as HTMLElement
    );
}

export default Modal;