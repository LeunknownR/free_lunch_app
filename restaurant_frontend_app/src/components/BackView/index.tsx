import BackIcon from "../../icons/BackIcon";
import { Container } from "./styles";

export type BackViewProps = {
	to: string;
};
const BackView = ({
	to
}: BackViewProps) => {
	return (
		<Container to={to}>
			<BackIcon/>
		</Container>
	);
}

export default BackView;