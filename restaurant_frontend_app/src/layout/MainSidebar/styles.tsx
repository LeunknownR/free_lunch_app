//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.aside`
	background-color: var(--dark-primary);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 50px 15px;
	img {
		width: 130px;
	}
`;
export const LinkWrapper = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 25px;
	height: 100px;
`;