import { useNavigate } from "react-router-dom";
import OffIcon from "../../../icons/OffIcon";
import AbsolutePaths from "../../../router/AbsolutePaths";
import { Container } from "./styles";

const LogoutButton = () => {
	const navigate = useNavigate();
	function logout() {
		localStorage.clear();
		navigate(AbsolutePaths.Login);
	}
	return (
		<Container onClick={logout}>
			<span className="icon">
				<OffIcon/>
			</span>
			<span>Cerrar sesión</span>
		</Container>
	);
}

export default LogoutButton;