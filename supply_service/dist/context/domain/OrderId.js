"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderError_1 = __importDefault(require("./OrderError"));
const crypto_1 = require("crypto");
class OrderId {
    //#endregion
    constructor(value) {
        if (!value)
            throw new OrderError_1.default("Invalid order id");
        this.value = value;
    }
    static Create() {
        return new OrderId((0, crypto_1.randomUUID)());
    }
}
exports.default = OrderId;
//# sourceMappingURL=OrderId.js.map