"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderError_1 = __importDefault(require("./OrderError"));
class OrderIssuedOn {
    constructor(value) {
        if (!this.isPastOrToday(value))
            throw new OrderError_1.default("Invalid order supplied on");
        this.value = value;
    }
    static Issue() {
        return new OrderIssuedOn(new Date());
    }
    isPastOrToday(value) {
        const today = new Date();
        return value <= today;
    }
}
exports.default = OrderIssuedOn;
//# sourceMappingURL=OrderIssuedOn.js.map