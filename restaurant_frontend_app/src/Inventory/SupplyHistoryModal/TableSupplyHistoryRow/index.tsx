import TableBodyRow from "../../../components/Table/TableBodyRow";
import { TableDefinition } from "../../../components/Table/TableBodyRow/styles";
import { getDateTimeFormatted } from "../../../utils/date";
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
				<span>{getDateTimeFormatted(suppliedOn)}</span>
			</TableDefinition>
		</TableBodyRow>
	);
};

export default TableSupplyHistoryRow;
