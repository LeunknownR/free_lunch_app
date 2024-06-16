//#region Libraries
import styled from "styled-components";
import Modal from "../../components/Modal";
import GuideMessage from "../../components/GuideMessage";
//#endregion

export const Container = styled(Modal)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 55%;
	& > table {
		width: 100%;
	}
	& > table, & > ${GuideMessage} {
		margin-bottom: 15px;
	}
`;