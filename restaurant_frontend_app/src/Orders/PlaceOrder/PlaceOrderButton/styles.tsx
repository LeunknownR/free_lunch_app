//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.button.attrs({
	type: "button"
})`
	display: grid;
	place-items: center;
	gap: 5px;
	background-color: transparent;
	border: 2px solid var(--dark-secondary);
	padding: 15px 35px;
	border-radius: 10px;
	transition: 0.3s;
	cursor: pointer;
	.icon svg {
		width: 70%;
	}
	span {
		color: var(--dark-secondary);
		font-weight: bold;
		font-size: 14px;
	}
	:hover {
		translate: -10px -10px;
		box-shadow: 10px 10px 0 0 var(--dark-secondary);
	}
`;