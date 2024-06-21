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
const Ingredient_1 = __importDefault(require("../domain/Ingredient"));
const IngredientQuantity_1 = __importDefault(require("../domain/IngredientQuantity"));
const SupplyHistoryRecord_1 = __importDefault(require("../domain/SupplyHistoryRecord"));
const { MARKETPLACE_SERVICE_URL } = process.env;
class SupplyIngredientsUseCase {
    constructor(httpRequest, supplyRepository) {
        this.httpRequest = httpRequest;
        this.supplyRepository = supplyRepository;
    }
    //#region Methods
    invoke(ingredientsRequested) {
        return __awaiter(this, void 0, void 0, function* () {
            const leftOverIngredients = [];
            const boughts = ingredientsRequested.map((ingredient) => __awaiter(this, void 0, void 0, function* () {
                const leftOverIngredient = yield this.attendIngredientOrder(ingredient);
                if (leftOverIngredient)
                    leftOverIngredients.push(leftOverIngredient);
            }));
            yield Promise.all(boughts);
            return leftOverIngredients;
        });
    }
    attendIngredientOrder(ingredient) {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const quantitySold = yield this.buyIngredients(ingredient.id);
                if (quantitySold === 0)
                    return;
                this.recordSupply(ingredient, quantitySold);
                const leftOverQuantity = ingredient.quantity.supply(quantitySold);
                if (leftOverQuantity > 0)
                    return this.getLeftOverIngredient(ingredient, leftOverQuantity);
                if (ingredient.quantity.value === 0)
                    return null;
            }
        });
    }
    recordSupply(ingredient, quantitySold) {
        // Nota: No hace falta esperar que termine para el proceso
        this.supplyRepository.recordSupply(SupplyHistoryRecord_1.default.Create(new IngredientId_1.default(ingredient.id), new IngredientQuantity_1.default(quantitySold)));
    }
    getLeftOverIngredient(ingredient, leftOverQuantity) {
        return new Ingredient_1.default(new IngredientId_1.default(ingredient.id), new IngredientQuantity_1.default(leftOverQuantity));
    }
    buyIngredients(ingredientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.httpRequest.get(MARKETPLACE_SERVICE_URL, { ingredient: ingredientId });
            return data.quantitySold;
        });
    }
}
exports.default = SupplyIngredientsUseCase;
//# sourceMappingURL=SupplyIngredientsUseCase.js.map