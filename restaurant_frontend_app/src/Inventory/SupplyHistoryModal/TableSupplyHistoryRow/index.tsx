import TableBodyRow from "../../../components/Table/TableBodyRow";
import { TableDefinition } from "../../../components/Table/TableBodyRow/styles";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";

type TableSupplyHistoryRowProps = {
	index: number;
	supplyHistoryRecord: SupplyHistoryRecord;
};
const TableSupplyHistoryRow = ({
	index,
	supplyHistoryRecord
}: TableSupplyHistoryRowProps) => {
	const { quantity, suppliedOn } = supplyHistoryRecord;
	return (
		<TableBodyRow order={index + 1}>
			<TableDefinition>
				<span><strong>{quantity}</strong></span>
			</TableDefinition>
			<TableDefinition>
				<span>{suppliedOn.toString()}</span>
			</TableDefinition>
		</TableBodyRow>
	);
};

export default TableSupplyHistoryRow;
