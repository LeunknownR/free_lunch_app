//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.button.attrs({
	type: "button"
})`
	border: 0;
	background-color: transparent;
	font-size: 16px;
	font-weight: bold;
	text-decoration: underline;
	text-decoration-thickness: 1.8px;
	text-underline-offset: 5px;
	color: var(--dark-secondary);
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		color: var(--dark-primary);
	}
`;