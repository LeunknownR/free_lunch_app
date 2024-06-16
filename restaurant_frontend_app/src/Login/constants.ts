import AuthLoginMessages from "./domain/AuthLoginMessages";

export const AUTH_LOGIN_ERRORS = new Map<AuthLoginMessages, string>([
	[AuthLoginMessages.InvalidCredentials, "Las credenciales no coinciden o no existen"],
	[AuthLoginMessages.UnexpectedError, "Ocurrió un error inesperado. Inténtalo más tarde"]
]);