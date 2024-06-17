import { ReactNode } from "react";
import { Container, TableDefinition } from "./styles";

export type TableBodyRowProps = {
	className?: string;
	order: number;
	children: ReactNode;
};
const TableBodyRow = ({
	className, order, children
}: TableBodyRowProps) => {
	return (
		<Container className={className}>
			<TableDefinition>
				<span>{order}</span>
			</TableDefinition>
			{children}
		</Container>
	);
}

export default TableBodyRow;