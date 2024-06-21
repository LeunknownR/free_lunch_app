"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IngredientId_1 = __importDefault(require("../domain/IngredientId"));
class SupplyIngredientsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    //#region Methods
    invoke(ingredientsSupplied) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventoryIngredients = yield this.repository.findIngredients(ingredientsSupplied.map(({ ingredientId }) => new IngredientId_1.default(ingredientId)));
            inventoryIngredients.forEach(currentIngredient => {
                const recipeIngredient = ingredientsSupplied.find(({ ingredientId }) => ingredientId === currentIngredient.id);
                currentIngredient.stock.supply(recipeIngredient.quantity);
            });
            this.repository.updateIngredientStocks(inventoryIngredients);
        });
    }
}
exports.default = SupplyIngredientsUseCase;
//# sourceMappingURL=SupplyIngredientsUseCase.js.map