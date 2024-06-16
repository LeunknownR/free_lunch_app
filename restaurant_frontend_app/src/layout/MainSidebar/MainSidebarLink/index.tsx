import AbsolutePaths from "../../../router/AbsolutePaths";
import { Container } from "./styles";

export type MainSidebarLinkProps = {
	to: AbsolutePaths;
	text: string;
};
const MainSidebarLink = ({ to, text }: MainSidebarLinkProps) => {
	return <Container to={to}>{text}</Container>;
};

export default MainSidebarLink;
