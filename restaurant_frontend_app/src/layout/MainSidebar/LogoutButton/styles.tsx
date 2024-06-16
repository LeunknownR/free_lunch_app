//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.button.attrs({
	type: "button"
})`
	background-color: transparent;
	border: 0;
	color: var(--dark-secondary);
	font-size: 18px;
	font-weight: bold;
	display: flex;
	gap: 12px;
	align-items: center;
	cursor: pointer;
	& .icon svg {
		height: 20px;
		display: grid;
		place-items: center;
	}
	&, .icon path {
		transition: 0.2s;
	}
	:hover {
		color: var(--light-primary);
		& .icon svg path {
			fill: var(--light-primary);
		}
	}
`;