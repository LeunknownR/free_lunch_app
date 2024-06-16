//#region Libraries
import styled from "styled-components";
//#endregion

const Field = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	label {
		margin-bottom: 10px;
		font-weight: 600;
	}
	input {
		height: 40px;
		font-size: 14px;
	}
	.error-message {
		margin-top: 8px;
	}
`;

export default Field;