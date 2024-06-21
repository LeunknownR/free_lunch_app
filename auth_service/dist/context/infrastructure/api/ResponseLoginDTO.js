"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(user) {
        this.id = user.id;
        this.username = user.username;
        this.name = user.name;
        this.surname = user.surname;
    }
}
exports.UserDTO = UserDTO;
class ResponseLoginDTO {
    constructor(token, user) {
        this.token = token;
        this.user = user;
    }
}
exports.default = ResponseLoginDTO;
;
//# sourceMappingURL=ResponseLoginDTO.js.map