import { Container } from "./styles";

export type TableHeadProps = {
	headers: string[];
};
const TableHead = ({
	headers
}: TableHeadProps) => {
	return (
		<Container>
			{["N°", ...headers].map((header, index) => (
				<th key={index}>
					<h4 title={header}>{header}</h4>
				</th>
			))}
		</Container>
	);
}

export default TableHead;