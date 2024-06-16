import useForm from "../../hooks/useForm";

export type LoginFormState = {
	username: string; 
	password: string;
};
export type LoginFormErrorState = {
	value: string | null;
	set: (value: string) => void;
	clear: () => void;
};
export type LoginFormHook = {
	value: LoginFormState;
	setUsername: (value: string) => void;
	setPassword: (value: string) => void;
	isValid: boolean;
};
const useLoginForm = (): LoginFormHook => {
	const form = useForm<LoginFormState>({
		username: "",
		password: ""
	});
	function setUsername(value: string) {
		form.setField("username", value);
	}
	function setPassword(value: string) {
		form.setField("password", value);
	}
	const { username, password } = form.value;
	return {
		value: form.value,
		setUsername, setPassword,
		isValid: username.length === 0 || password.length === 0
	};
}	
	
export default useLoginForm;