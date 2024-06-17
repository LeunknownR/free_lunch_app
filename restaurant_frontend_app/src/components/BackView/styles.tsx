//#region Libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
//#endregion

export const Container = styled(Link)`
	display: grid;
	place-items: center;
	transition: 0.25s;
	:hover {
		rotate: 360deg;
	}
`;