import useLoginForm from "./hooks/useLoginForm";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";
import AbsolutePaths from "../router/AbsolutePaths";
import { FormEvent } from "react";
import userTokenStorage from "../shared/infrastructure/storage/userTokenStorage";
import useErrorMessage from "../components/ErrorMessage/hooks/useError";
import { LoginResponse } from "./domain/AuthRepository";
import currentUserStorage from "../shared/infrastructure/storage/currentUserStorage";
import AuthLoginMessages from "./domain/AuthLoginMessages";
import useTitle from "../hooks/useTitle";
import ErrorMessage from "../components/ErrorMessage";
import RepositoryProvider from "../shared/infrastructure/persistence/RepositoryProvider";
import HttpRequestError from "../shared/domain/HttpRequestError";
import { AUTH_LOGIN_ERRORS } from "./constants";
import { LoginCard } from "./styles";
import CenteredLayout from "../layout/CenteredLayout";
import UserIcon from "../icons/UserIcon";
import Preloader from "../components/Preloader";
import usePreloader from "../components/Preloader/hooks/usePreloader";

const authRepository = RepositoryProvider.getAuthRepository();
const LoginView = () => {
	useTitle("Login");
	const preloader = usePreloader();
	const loginForm = useLoginForm();
	const errorLoginForm = useErrorMessage();
	const navigate = useNavigate();
	const { username: email, password } = loginForm.value;
	function startUserSession(loginResponse: LoginResponse) {
		const { token, user } = loginResponse;
		userTokenStorage.set(token);
		currentUserStorage.set(user);
		navigate(AbsolutePaths.Orders);
	}
	function getLoginError(error: unknown): AuthLoginMessages {
		if (!(error instanceof HttpRequestError)) 
			return AuthLoginMessages.UnexpectedError;
		const authLoginMessage = error.message as AuthLoginMessages;
		if (AUTH_LOGIN_ERRORS.has(authLoginMessage))
			return authLoginMessage;
		return AuthLoginMessages.UnexpectedError;
	}
	async function login(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			preloader.show();
			const loginResponse = await authRepository.login(loginForm.value);
			startUserSession(loginResponse);
		} catch (error) {
			errorLoginForm.set(AUTH_LOGIN_ERRORS.get(getLoginError(error))!);
		}
		finally {
			preloader.hide();
		}
	}
	return (
		<CenteredLayout>
			<LoginCard>
				<h1 className="title">INICIO DE SESIÓN</h1>
				<form onSubmit={login}>
					<TextField
						value={email}
						placeholder="Usuario"
						onFocus={errorLoginForm.clear}
						maxLength={50}
						onChange={e => loginForm.setUsername(e.target.value)}
					/>
					<TextField
						type="password"
						value={password}
						placeholder="Contraseña"
						onFocus={errorLoginForm.clear}
						maxLength={50}
						onChange={e => loginForm.setPassword(e.target.value)}
					/>
					<ErrorMessage error={errorLoginForm.value} />
					<Button 
						adornment={<span className="fill"><UserIcon/></span>}
						content="INICIAR SESSIÓN" disabled={loginForm.isValid} />
				</form>
			</LoginCard>
			<Preloader preloader={preloader}/>
		</CenteredLayout>
	);
};

export default LoginView;
