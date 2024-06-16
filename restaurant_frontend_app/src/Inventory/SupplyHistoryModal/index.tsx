import GuideMessage from "../../components/GuideMessage";
import HeaderSection from "../../components/HeaderSection";
import Table from "../../components/Table";
import { SupplyHistoryHook } from "../hooks/useSupplyHistory";
import TableSupplyHistoryRow from "./TableSupplyHistoryRow";
import { SUPPLY_HISTORY_TABLE_HEADERS } from "./constants";
import { Container } from "./styles";

export type SupplyHistoryModalProps = {
	supplyHistory: SupplyHistoryHook;
};
const SupplyHistoryModal = ({ supplyHistory }: SupplyHistoryModalProps) => {
	const { modal, ingredient } = supplyHistory;
	return (
		<Container modal={modal}>
			{ingredient && (
				<>
					<HeaderSection
						title="Historial de abastecimiento"
						description={
							<span>
								Este es el historial de compras realizadas para
								abastecer el restaurante de{" "}
								<strong>
									{ingredient.label.toLowerCase()}.
								</strong>
							</span>
						}
					/>
					<img
						src={`/images/${ingredient.image}`}
						alt={ingredient.label}
					/>
					{supplyHistory.value.length > 0 ? (
						<Table headers={SUPPLY_HISTORY_TABLE_HEADERS}>
							{supplyHistory.value.map(
								(supplyHistoryRecord, index) => (
									<TableSupplyHistoryRow
										key={index}
										index={index}
										supplyHistoryRecord={
											supplyHistoryRecord
										}
									/>
								)
							)}
						</Table>
					) : (
						<GuideMessage>
							No existen registros actualmente
						</GuideMessage>
					)}
				</>
			)}
		</Container>
	);
};

export default SupplyHistoryModal;
