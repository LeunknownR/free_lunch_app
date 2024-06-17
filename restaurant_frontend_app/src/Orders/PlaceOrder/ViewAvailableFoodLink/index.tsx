//#region Libraries
import { Container } from "./styles";
import Button from "../../../components/Button";
import AbsolutePaths from "../../../router/AbsolutePaths";
import BookIcon from "../../../icons/BookIcon";
//#endregion

const ViewAvailableFoodLink = () => {
	return (
		<Container to={AbsolutePaths.Food}>
			<Button 
				adornment={
					<span className="stroke"><BookIcon/></span>
				}
				content="Ver platos disponibles"/>
		</Container>
	);
}

export default ViewAvailableFoodLink;