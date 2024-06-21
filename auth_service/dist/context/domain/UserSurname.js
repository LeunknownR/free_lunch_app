"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserError_1 = __importDefault(require("./UserError"));
class UserSurname {
    constructor(value) {
        if (!value)
            throw new UserError_1.default("Invalid surname");
        this.value = value;
    }
}
exports.default = UserSurname;
//# sourceMappingURL=UserSurname.js.map