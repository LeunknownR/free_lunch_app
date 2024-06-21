"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeError_1 = __importDefault(require("./RecipeError"));
class RecipeIngredientLabel {
    constructor(value) {
        if (!value)
            throw new RecipeError_1.default("Invalid recipe ingredient label");
        this.value = value;
    }
}
exports.default = RecipeIngredientLabel;
//# sourceMappingURL=RecipeIngredientLabel.js.map