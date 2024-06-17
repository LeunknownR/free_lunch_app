import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

type ButtonProps = {
	content: string;
	adornment?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ adornment, content, ...restProps }: ButtonProps) => {
	return (
		<Container
			{...restProps}
			className="button"
		>
			{adornment}
			<div>{content}</div>
		</Container>
	);
};

export default Button;
