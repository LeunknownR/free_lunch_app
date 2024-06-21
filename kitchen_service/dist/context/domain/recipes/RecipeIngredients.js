"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeError_1 = __importDefault(require("./RecipeError"));
class RecipeIngredients {
    constructor(value) {
        this.value = value;
        if (value.length === 0)
            throw new RecipeError_1.default("Invalid recipe ingredients");
    }
}
exports.default = RecipeIngredients;
//# sourceMappingURL=RecipeIngredients.js.map