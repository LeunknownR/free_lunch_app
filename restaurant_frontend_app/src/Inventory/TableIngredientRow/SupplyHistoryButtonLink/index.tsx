import { Container } from "./styles";

export type HistoryButtonLinkProps = {
	viewSupplyHistory: () => void;
};
const SupplyHistoryButtonLink = ({
	viewSupplyHistory
}: HistoryButtonLinkProps) => {
	return (
		<Container onClick={viewSupplyHistory}>
			Ver historial
		</Container>
	);
}

export default SupplyHistoryButtonLink;