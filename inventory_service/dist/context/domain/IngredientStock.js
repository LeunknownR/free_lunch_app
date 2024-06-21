"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InventoryError_1 = __importDefault(require("./InventoryError"));
class IngredientStock {
    //#endregion
    constructor(value) {
        if (!this.isPositiveNumberOrZero(value))
            throw new InventoryError_1.default("Invalid ingredient stock");
        this._value = value;
    }
    //#region Methods
    get value() {
        return this._value;
    }
    isPositiveNumberOrZero(value) {
        return value >= 0;
    }
    supply(value) {
        this._value += value;
    }
    take(value) {
        const newValue = this._value - value;
        this._value = Math.max(0, newValue);
        if (newValue < 0)
            return Math.abs(newValue);
        return 0;
    }
}
exports.default = IngredientStock;
//# sourceMappingURL=IngredientStock.js.map