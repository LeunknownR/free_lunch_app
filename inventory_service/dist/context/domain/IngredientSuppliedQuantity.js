"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InventoryError_1 = __importDefault(require("./InventoryError"));
class IngredientSuppliedQuantity {
    //#endregion
    constructor(value) {
        if (!this.isPositiveNumber(value))
            throw new InventoryError_1.default("Invalid ingredient supplied quantity");
        this._value = value;
    }
    //#region Methods
    get value() {
        return this._value;
    }
    isPositiveNumber(value) {
        return value > 0;
    }
}
exports.default = IngredientSuppliedQuantity;
//# sourceMappingURL=IngredientSuppliedQuantity.js.map