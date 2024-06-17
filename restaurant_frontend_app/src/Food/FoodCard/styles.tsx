//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	h4 {
		font-size: 20px;
		margin: 0;
		color: var(--dark-primary);
	}
	p {
		margin: 0;
		height: 70px;
		color: var(--dark-secondary);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 0;
		padding: 0;
	}
`;
export const IngredientTag = styled.li`
	list-style: none;
	background-color: var(--dark-secondary);
	border-radius: 5px;
	color: var(--light-primary);
	font-size: 14px;
	font-weight: bold;
	padding: 6px 10px;
	width: 90px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;