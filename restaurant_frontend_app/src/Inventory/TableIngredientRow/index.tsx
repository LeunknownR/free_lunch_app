import TableBodyRow from "../../components/Table/TableBodyRow";
import {
	TableBodyCellWrapper,
	TableDefinition,
} from "../../components/Table/TableBodyRow/styles";
import Ingredient from "../domain/Ingredient";
import SupplyHistoryButtonLink from "./SupplyHistoryButtonLink";

type TableIngredientRowProps = {
	index: number;
	ingredient: Ingredient;
	viewSupplyHistory: (ingredient: Ingredient) => void;
};
const TableIngredientRow = ({
	index,
	ingredient,
	viewSupplyHistory,
}: TableIngredientRowProps) => {
	const { label, image, stock } = ingredient;
	return (
		<TableBodyRow order={index + 1}>
			<TableDefinition>
				<TableBodyCellWrapper>
					<img
						src={`/images/${image}`}
						alt={label}
						loading="lazy"
					/>
					<span title={label}>{label}</span>
				</TableBodyCellWrapper>
			</TableDefinition>
			<TableDefinition>
				<span><strong>{stock}</strong></span>
			</TableDefinition>
			<TableDefinition>
				<SupplyHistoryButtonLink
					viewSupplyHistory={() => viewSupplyHistory(ingredient)}
				/>
			</TableDefinition>
		</TableBodyRow>
	);
};

export default TableIngredientRow;
