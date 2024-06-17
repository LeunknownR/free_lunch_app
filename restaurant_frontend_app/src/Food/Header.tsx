import BackView from "../components/BackView";
import { TitleSection } from "../components/HeaderSection/styles";
import AbsolutePaths from "../router/AbsolutePaths";
import { Container } from "./styles";

const Header = () => {
	return (
		<Container>
			<BackView to={AbsolutePaths.Orders}/>
			<TitleSection>Platos disponibles</TitleSection>
		</Container>
	);
}

export default Header;