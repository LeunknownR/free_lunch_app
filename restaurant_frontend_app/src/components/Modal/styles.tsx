//#region Libraries
import styled from "styled-components";
//#endregion

export const Window = styled.div`
    position: relative;
    background-color: var(--light);
    padding: 20px 50px;
    transition: translate 0.25s;
	border-radius: 8px;
    box-shadow: 
		0px 11px 15px -7px rgba(0,0,0,0.2), 
		0px 24px 38px 3px rgba(0,0,0,0.14), 
		0px 9px 46px 8px rgba(0,0,0,0.12);
    height: max-content;
    max-height: 90vh;
    @media (min-width: 501px) {
        min-width: 400px;
        max-width: 90%;
    }
    @media (max-width: 500px) {
        width: 85%;
    }
`;
export const Container = styled.div`
    background-color: var(--overlay);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 1;
    &.hidden {
        opacity: 0;
        visibility: hidden;
        & ${Window} {
			translate: 0 100%;
        }
    }
`;
export const CloseButton = styled.button.attrs({
    type: "button"
})`
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
    svg {
        width: 28px;
    }
`;