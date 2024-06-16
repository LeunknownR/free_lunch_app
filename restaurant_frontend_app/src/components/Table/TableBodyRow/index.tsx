import { ReactNode } from "react";
import { Container, TableDefinition } from "./styles";

export type TableBodyRowProps = {
	order: number;
	children: ReactNode;
};
const TableBodyRow = ({
	order, children
}: TableBodyRowProps) => {
	return (
		<Container>
			<TableDefinition>
				<span>{order}</span>
			</TableDefinition>
			{children}
		</Container>
	);
}

export default TableBodyRow;