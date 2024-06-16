export default class LoginError extends Error {
    static readonly INVALID_CREDENTIALS: string = "INVALID_CREDENTIALS"
    private constructor(error: string) {
        super(error);
    }
    static InvalidCredentials(): LoginError {
        return new LoginError(LoginError.INVALID_CREDENTIALS)
    }
}