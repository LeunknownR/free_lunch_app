//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.tr`
	--primary-color: var(--dark-secondary);
	--secondary-color: var(--light);
	--border-radius: 5px;
	background-color: var(--secondary-color);
	height: 50px;
	* {
		transition: 0.3s;
	}
`;
export const TableDefinition = styled.td`
	border: 0 solid var(--primary-color);
	border-top-width: 1px;
	border-bottom-width: 1px;
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
		color: var(--primary-color);
	}
	img {
		width: 65px;
		height: 45px;
		object-fit: cover;
	}
`;
export const TableBodyCellWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;