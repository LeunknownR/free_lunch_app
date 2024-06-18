//#region Libraries
import styled from "styled-components";
//#endregion

export const TableBodyCellWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;
export const TableDefinition = styled.td`
	border: 0 solid var(--dark-secondary);
	border-top-width: 1px;
	border-bottom-width: 1px;
	transition: 0.2s;
	:first-child {
		border-left-width: 1px;
	}
	:last-child {
		border-right-width: 1px;
	}
	:last-child {
		border-top-right-radius: var(--border-radius);
	}
	:first-child {
		border-top-left-radius: var(--border-radius);
	}
	:first-child {
		border-bottom-left-radius: var(--border-radius);
	}
	:last-child {
		border-bottom-right-radius: var(--border-radius);
	}
	* {
		color: var(--dark-secondary);
		transition: 0.2s;
	}
	img {
		width: 65px;
		height: 45px;
		object-fit: cover;
	}
`;
export const Container = styled.tr`
	--border-radius: 5px;
	background-color: var(--light);
	height: 50px;
	transition: 0.2s;
`;