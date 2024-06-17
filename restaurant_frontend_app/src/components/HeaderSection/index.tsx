import { ReactNode } from "react";
import { Container, TitleSection } from "./styles";

export type HeaderSectionProps = {
	title: string; 
	description: string | ReactNode;
};
const HeaderSection = ({
	title, description
}: HeaderSectionProps) => {
	return (
		<Container>
			<TitleSection>{title}</TitleSection>
			<p>{description}</p>
		</Container>
	);
}

export default HeaderSection;