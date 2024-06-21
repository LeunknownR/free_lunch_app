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
class RequestIngredientsSupplyUseCase {
    constructor(inventoryRepository, supplyIngredientQueue) {
        this.inventoryRepository = inventoryRepository;
        this.supplyIngredientQueue = supplyIngredientQueue;
    }
    //#region Methods
    invoke(orderId, recipeIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventoryIngredients = yield this.inventoryRepository.findIngredients(recipeIngredients.map(ingredient => new IngredientId_1.default(ingredient.id)));
            const ingredientsToSupply = inventoryIngredients.map(inventoryIngredient => ({
                id: inventoryIngredient.id,
                quantity: recipeIngredients.find(({ id: ingredientId }) => ingredientId === inventoryIngredient.id).quantity.value,
            }));
            this.supplyIngredientQueue.send({
                orderId: orderId.value,
                ingredients: ingredientsToSupply
            });
        });
    }
}
exports.default = RequestIngredientsSupplyUseCase;
//# sourceMappingURL=RequestIngredientsSupplyUseCase.js.map