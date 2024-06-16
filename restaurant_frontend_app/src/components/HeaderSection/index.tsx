import { ReactNode } from "react";
import { Container } from "./styles";

export type HeaderSectionProps = {
	title: string; 
	description: string | ReactNode;
};
const HeaderSection = ({
	title, description
}: HeaderSectionProps) => {
	return (
		<Container>
			<h2>{title}</h2>
			<p>{description}</p>
		</Container>
	);
}

export default HeaderSection;