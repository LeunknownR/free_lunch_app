"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupplyHistoryError_1 = __importDefault(require("./SupplyHistoryError"));
class IngredientSuppliedOn {
    constructor(value) {
        if (this.isFuture(value))
            throw new SupplyHistoryError_1.default("Invalid supply history record supplied on");
        this.value = value;
    }
    static Issue() {
        return new IngredientSuppliedOn(new Date());
    }
    isFuture(value) {
        const today = new Date();
        return value > today;
    }
}
exports.default = IngredientSuppliedOn;
//# sourceMappingURL=IngredientSuppliedOn.js.map