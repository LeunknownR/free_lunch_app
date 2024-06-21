"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderError_1 = __importDefault(require("./OrderError"));
class OrderStatus {
    //#endregion
    constructor(value) {
        if (!value)
            throw new OrderError_1.default("Invalid order state");
        this._value = value;
    }
    static InProgress() {
        return new OrderStatus(OrderStatus.IN_PROGRESS);
    }
    static Dispatched() {
        return new OrderStatus(OrderStatus.DISPATCHED);
    }
    //#region Methods
    get value() {
        return this._value;
    }
}
//#region Constants
OrderStatus.IN_PROGRESS = "IN_PROGRESS";
OrderStatus.DISPATCHED = "DISPATCHED";
exports.default = OrderStatus;
//# sourceMappingURL=OrderStatus.js.map