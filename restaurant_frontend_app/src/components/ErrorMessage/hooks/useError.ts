import { useState } from "react";

export type ErrorMessageValue = string | null;
export type ErrorMessageHook = {
	value: ErrorMessageValue;
	set: (value: string) => void;
	clear: () => void;
};
const useErrorMessage = (): ErrorMessageHook => {
	const [error, setError] = useState<ErrorMessageValue>(null);
	return {
		value: error,
		set: value => setError(value),
		clear: () => setError(null)
	};
}

export default useErrorMessage;