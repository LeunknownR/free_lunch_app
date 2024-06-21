"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeError_1 = __importDefault(require("./RecipeError"));
class RecipeIngredientQuantity {
    //#endregion
    constructor(value) {
        if (!this.isPositiveNumberOrZero(value))
            throw new RecipeError_1.default("Invalid recipe ingredient quantity");
        this.value = value;
    }
    //#region Methods
    isPositiveNumberOrZero(value) {
        return value >= 0;
    }
}
exports.default = RecipeIngredientQuantity;
//# sourceMappingURL=RecipeIngredientQuantity.js.map