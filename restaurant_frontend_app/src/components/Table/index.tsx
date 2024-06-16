import { ReactNode } from "react";
import TableHead from "./TableHead";
import { Container } from "./styles";

export type TableProps = {
	headers: string[];
	children: ReactNode;
};
const Table = ({
	headers,
	children
}: TableProps) => {
	return (
		<Container>
			<thead>
				<TableHead headers={headers}/>
			</thead>
			<tbody>
				{children}
			</tbody>
		</Container>
	);
}

export default Table;