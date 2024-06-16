import { ErrorMessageValue } from "./hooks/useError";
import { Message } from "./styles";

export type ErrorMessageProps = {
	error: ErrorMessageValue;
};
const ErrorMessage = ({ error }: ErrorMessageProps) => {
	if (!error) return null;
	return <Message className="error-message">{error}</Message>;
};

export default ErrorMessage;
