import {
	TableBodyCellWrapper,
	TableDefinition,
} from "../../../components/Table/TableBodyRow/styles";
import { getDateTimeFormatted } from "../../../utils/date";
import Order from "../../domain/Order";
import { ORDER_RECORD_RENDER_DATA_BY_STATUS } from "../constants";
import { Container } from "./styles";

type TableOrderRowProps = {
	index: number;
	order: Order;
};
const TableOrderRow = ({ index, order }: TableOrderRowProps) => {
	const { recipe, status, issuedOn } = order;
	const renderData = ORDER_RECORD_RENDER_DATA_BY_STATUS[status];
	return (
		<Container className={renderData.className} order={index + 1}>
			<TableDefinition>
				<TableBodyCellWrapper>
					<img
						src={`/images/${recipe.image}`}
						alt={recipe.name}
						loading="lazy"
					/>
					<span title={recipe.name}>{recipe.name}</span>
				</TableBodyCellWrapper>
			</TableDefinition>
			<TableDefinition>
				<span>{getDateTimeFormatted(issuedOn)}</span>
			</TableDefinition>
			<TableDefinition>
				<span><strong>{renderData.status}</strong></span>
			</TableDefinition>
		</Container>
	);
};

export default TableOrderRow;
