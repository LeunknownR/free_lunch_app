//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.button`
	padding: 10px 15px;
	font-size: 14px;
	font-weight: 600;
	border-radius: 5px;
	color: var(--dark-secondary);
	background-color: var(--light);
	border: 1px solid var(--dark-secondary);
	display: flex;
	align-items: center;
	gap: 10px;
	&, svg path {
		transition: 0.25s;
	}
	& .fill {
		svg, path {
			fill: var(--dark-secondary);
		}
	}
	& .stroke {
		svg, path {
			stroke: var(--dark-secondary);
		}
	}
	svg {
		height: 22px;
	}
	div {
		text-align: center;
		width: 100%;
	}
	&:hover {
		color: var(--dark-primary);
		& .fill {
			svg, path {
				stroke: var(--dark-primary);
			}
		}
		& .stroke {
			svg, path {
				stroke: var(--dark-primary);
			}
		}
	}
	&:not(:disabled) {
		cursor: pointer;
	}
	&:disabled {
		background-color: var(--light-secondary);
	}
`;