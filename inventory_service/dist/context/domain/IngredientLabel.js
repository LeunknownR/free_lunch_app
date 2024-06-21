"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InventoryError_1 = __importDefault(require("./InventoryError"));
class IngredientLabel {
    constructor(value) {
        if (!value)
            throw new InventoryError_1.default("Invalid ingredient label");
        this.value = value;
    }
}
exports.default = IngredientLabel;
//# sourceMappingURL=IngredientLabel.js.map