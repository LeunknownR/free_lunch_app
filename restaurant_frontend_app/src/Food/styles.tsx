//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.header`
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const FoodWrapper = styled.section`
	display: grid;
	place-content: center;
	grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
	gap: 20px;
	row-gap: 30px;
`;