//#region Libraries
import styled, { keyframes } from "styled-components";
//#endregion

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;
export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	width: 100%;
	height: 100%;
	background-color: var(--overlay);
	transition: 0.25s;
    z-index: 2;
	&:not(.visible) {
		visibility: hidden;
		opacity: 0;
	}
	div {
		width: 50px;
		height: 50px;
		border: 5px solid transparent;
		border-top-color: var(--light);
		border-radius: 50%;
		animation: ${spin} 1s linear infinite;
	}
`;