"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeError_1 = __importDefault(require("./RecipeError"));
class RecipeIngredientId {
    //#endregion
    constructor(value) {
        if (!value)
            throw new RecipeError_1.default("Invalid recipe ingredient id");
        this.value = value;
    }
}
exports.default = RecipeIngredientId;
//# sourceMappingURL=RecipeIngredientId.js.map