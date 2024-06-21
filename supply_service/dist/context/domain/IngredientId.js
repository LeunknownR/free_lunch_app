"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupplyHistoryError_1 = __importDefault(require("./SupplyHistoryError"));
class IngredientId {
    constructor(value) {
        if (!value)
            throw new SupplyHistoryError_1.default("Invalid ingredient id");
        this.value = value;
    }
}
exports.default = IngredientId;
//# sourceMappingURL=IngredientId.js.map