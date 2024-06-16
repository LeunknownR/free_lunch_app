//#region Libraries
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//#endregion

export const Container = styled(NavLink)`
	font-size: 20px;
	font-weight: bold;
	text-decoration: none;
	color: var(--dark-secondary);
	&.active {
		color: var(--light-primary);
	}
`;