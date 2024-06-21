"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserError_1 = __importDefault(require("./UserError"));
class UserId {
    constructor(value) {
        if (!this.isPositiveNumberOrZero(value))
            throw new UserError_1.default("Invalid id number");
        if (!value)
            throw new UserError_1.default("Invalid id");
        this.value = value;
    }
    isPositiveNumberOrZero(value) {
        return value >= 0;
    }
}
exports.default = UserId;
//# sourceMappingURL=UserId.js.map