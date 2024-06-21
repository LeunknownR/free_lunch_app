"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginError extends Error {
    constructor(error) {
        super(error);
    }
    static InvalidCredentials() {
        return new LoginError(LoginError.INVALID_CREDENTIALS);
    }
}
LoginError.INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
exports.default = LoginError;
//# sourceMappingURL=LoginError.js.map