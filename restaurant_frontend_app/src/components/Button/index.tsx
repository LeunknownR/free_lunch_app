import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = {
	content: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ content, ...restProps }: ButtonProps) => {
	return (
		<Container
			{...restProps}
			className="button"
		>
			{content}
		</Container>
	);
};

export default Button;
