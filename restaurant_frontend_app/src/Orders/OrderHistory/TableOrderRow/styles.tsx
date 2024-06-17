//#region Libraries
import styled from "styled-components";
import TableBodyRow from "../../../components/Table/TableBodyRow";
//#endregion

export const Container = styled(TableBodyRow)`
	&.in-progress {
		--primary-color: var(--order-in-progress-dark);
		--secondary-color: var(--order-in-progress);
	}
	&.dispatched {
		--primary-color: var(--order-dispatched-dark);
		--secondary-color: var(--order-dispatched);
	}
`;