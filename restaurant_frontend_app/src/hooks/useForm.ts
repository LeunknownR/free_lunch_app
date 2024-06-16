import { useState } from "react";

export type FormHook<F> = {
	value: F;
	setField: <K extends keyof F>(field: K, value: F[K]) => void;
};
const useForm = <F> (value: F): FormHook<F> => {
	const [form, setForm] = useState<F>(value);
	function setField<K extends keyof F>(field: K, value: F[K]): void {
		setForm(prev => ({
			...prev,
			[field]: value
		}));
	}
	return {
		value: form,
		setField
	};
}

export default useForm;