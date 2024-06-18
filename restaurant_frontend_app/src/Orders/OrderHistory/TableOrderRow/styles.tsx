//#region Libraries
import styled from "styled-components";
import TableBodyRow from "../../../components/Table/TableBodyRow";
import { TableDefinition } from "../../../components/Table/TableBodyRow/styles";
//#endregion

export const Container = styled(TableBodyRow)`
	&.in-progress {
		background-color: var(--order-in-progress);
		${TableDefinition} {
			border-color: var(--order-dispatched-dark);
			* {
				color: var(--order-in-progress-dark);
				transition: 0.2s;
			}
		}
	}
	&.dispatched {
		background-color: var(--order-dispatched);
		${TableDefinition} {
			border-color: var(--order-dispatched-dark);
			* {
				color: var(--order-dispatched-dark);
				transition: 0.2s;
			}
		}
	}
`;