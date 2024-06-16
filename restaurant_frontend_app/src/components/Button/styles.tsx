//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.button`
	padding: 8px 10px;
	font-size: 14px;
	font-weight: 600;
	border-radius: 5px;
	color: #404040;
	background-color: #f5f5f5;
	border: 1px solid #757575;
	transition: 0.3s;
	height: 40px;
	&:hover {
		color: #151515;
	}
	&:not(:disabled) {
		cursor: pointer;
	}
	&:disabled {
		background-color: #d5d5d5;
		color: #909090;
	}
`;