"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupplyHistoryError_1 = __importDefault(require("./SupplyHistoryError"));
class IngredientQuantity {
    //#endregion
    constructor(value) {
        if (!this.isPositiveNumber(value))
            throw new SupplyHistoryError_1.default("Invalid ingredient quantity");
        this._value = value;
    }
    //#region Methods
    get value() {
        return this._value;
    }
    isPositiveNumber(value) {
        return value >= 0;
    }
    supply(value) {
        const newValue = this._value - value;
        this._value = Math.max(0, newValue);
        if (newValue < 0)
            return Math.abs(newValue);
        return 0;
    }
}
exports.default = IngredientQuantity;
//# sourceMappingURL=IngredientQuantity.js.map