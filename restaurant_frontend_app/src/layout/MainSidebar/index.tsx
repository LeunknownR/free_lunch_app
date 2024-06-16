import { Container, LinkWrapper } from "./styles";
import logoImage from "../../images/logo.svg";
import { MAIN_SIDEBAR_LINKS } from "./constants";
import MainSidebarLink from "./MainSidebarLink";
import LogoutButton from "./LogoutButton";

const MainSidebar = () => {
	return (
		<Container>
			<img src={logoImage} alt="Logo de la aplicación"/>
			<LinkWrapper>
				{MAIN_SIDEBAR_LINKS.map((props, index) => (
					<MainSidebarLink key={index} {...props}/>
				))}
			</LinkWrapper>
			<LogoutButton/>
		</Container>
	);
}

export default MainSidebar;