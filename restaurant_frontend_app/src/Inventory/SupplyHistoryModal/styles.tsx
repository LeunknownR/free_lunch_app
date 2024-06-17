//#region Libraries
import styled from "styled-components";
import Modal from "../../components/Modal";
import GuideMessage from "../../components/GuideMessage";
//#endregion

export const ContainerTable = styled.div`
	overflow-y: auto;
	max-height: 400px;
	padding-right: 10px;
	&, & table {
		width: 100%;
	}
`;
export const Container = styled(Modal)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 55%;
	& ${ContainerTable}, & ${GuideMessage} {
		margin-top: 10px;
		margin-bottom: 20px;
	}
`;