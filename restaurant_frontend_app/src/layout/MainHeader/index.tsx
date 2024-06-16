import UserIcon from "../../icons/UserIcon";
import { Container } from "./styles";
import useAppContext from "../../context/useAppContext";

const MainHeader = () => {
	const { currentUser } = useAppContext();
	return (
		<Container>
			<span className="icon"><UserIcon/></span>
			<span>¡Hola, <strong>{currentUser.name} {currentUser.surname}</strong>!</span>
		</Container>
	);
}

export default MainHeader;