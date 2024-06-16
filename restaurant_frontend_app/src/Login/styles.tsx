//#region Libraries
import styled from "styled-components";
//#endregion

export const LoginCard = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 40%;
	max-width: 500px;
	border: 1px solid #151515;
	border-radius: 5px;
	padding: 30px;
	.title {
		margin: 0;
		margin-bottom: 20px;
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 15px;
		> * {
			width: 100%;
		}
		.button {
			margin-top: 5px;
		}
	}
`;