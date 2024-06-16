import { InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage";
import { ErrorMessageValue } from "../ErrorMessage/hooks/useError";
import { Container } from "./styles";

export type TextFieldProps = {
	label?: string;
	error?: ErrorMessageValue;
} & InputHTMLAttributes<HTMLInputElement>;
const TextField = ({ label, error, ...inputProps }: TextFieldProps) => {
	return (
		<Container>
			{label && <label>{label}</label>}
			<input {...inputProps} />
			{error && <ErrorMessage error={error} />}
		</Container>
	);
};

export default TextField;
