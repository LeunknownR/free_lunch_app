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
const RecipeIngredient_1 = __importDefault(require("../domain/RecipeIngredient"));
const RecipeIngredientQuantity_1 = __importDefault(require("../domain/RecipeIngredientQuantity"));
class RequestIngredientsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    //#region Methods
    /**
     * @returns {RecipeIngredient[]} Returns recipe ingredients missing.
     */
    invoke(recipeIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventoryIngredients = yield this.findIngredients(recipeIngredients);
            const recipeIngredientsMissing = [];
            recipeIngredients.forEach(recipeIngredient => {
                const inventoryIngredient = inventoryIngredients.find(({ id }) => id === recipeIngredient.id);
                const missingRecipe = this.takeAndDistribuiteIngredients(recipeIngredient, inventoryIngredient);
                if (missingRecipe)
                    recipeIngredientsMissing.push(missingRecipe);
            });
            yield this.repository.updateIngredientStocks(inventoryIngredients);
            return recipeIngredientsMissing;
        });
    }
    findIngredients(recipeIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredientIds = recipeIngredients.map(recipeIngredient => new IngredientId_1.default(recipeIngredient.id));
            return yield this.repository.findIngredients(ingredientIds);
        });
    }
    takeAndDistribuiteIngredients(recipeIngredient, inventoryIngredient) {
        const requiredQuantity = recipeIngredient.quantity.value;
        const missingQuantity = inventoryIngredient.stock.take(requiredQuantity);
        const existingQuantity = requiredQuantity - missingQuantity;
        recipeIngredient.quantity.distribuite(existingQuantity);
        if (missingQuantity === 0)
            return null;
        return new RecipeIngredient_1.default(new IngredientId_1.default(recipeIngredient.id), new RecipeIngredientQuantity_1.default(missingQuantity));
    }
}
exports.default = RequestIngredientsUseCase;
//# sourceMappingURL=RequestIngredientsUseCase.js.map