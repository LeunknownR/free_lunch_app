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
const MySqlContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MySqlContextProvider"));
const RequestIngredientsUseCase_1 = __importDefault(require("../../application/RequestIngredientsUseCase"));
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const RecipeIngredient_1 = __importDefault(require("../../domain/RecipeIngredient"));
const RecipeIngredientQuantity_1 = __importDefault(require("../../domain/RecipeIngredientQuantity"));
const MySqlInventoryRepository_1 = __importDefault(require("../persistence/MySqlInventoryRepository"));
const QueueContext_1 = __importDefault(require("../../shared/infrastructure/message_queue/QueueContext"));
const RequestIngredientsSupplyUseCase_1 = __importDefault(require("../../application/RequestIngredientsSupplyUseCase"));
const DistributeIngredientsUseCase_1 = __importDefault(require("../../application/DistributeIngredientsUseCase"));
const OrderId_1 = __importDefault(require("../../domain/OrderId"));
function onRequestIngredientQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        const queueContext = yield QueueContext_1.default.getInstance();
        queueContext.requestIngredients.on((data) => __awaiter(this, void 0, void 0, function* () {
            const inventoryRepository = new MySqlInventoryRepository_1.default(MySqlContextProvider_1.default.getInventoryDatabase());
            const requestIngredientsUseCase = new RequestIngredientsUseCase_1.default(inventoryRepository);
            const recipeIngredients = data.ingredients.map(({ id, quantity }) => new RecipeIngredient_1.default(new IngredientId_1.default(id), new RecipeIngredientQuantity_1.default(quantity)));
            const recipeIngredientsMissing = yield requestIngredientsUseCase.invoke(recipeIngredients);
            const distributeIngredientsUseCase = new DistributeIngredientsUseCase_1.default(queueContext.ingredientsDistributedQueue);
            const orderId = new OrderId_1.default(data.orderId);
            if (recipeIngredientsMissing.length === 0) {
                distributeIngredientsUseCase.invoke(orderId);
                return;
            }
            const supplyIngredientsUseCase = new RequestIngredientsSupplyUseCase_1.default(inventoryRepository, queueContext.supplyIngredientQueue);
            supplyIngredientsUseCase.invoke(orderId, recipeIngredientsMissing);
        }));
    });
}
exports.default = onRequestIngredientQueue;
//# sourceMappingURL=request_ingredients.queue.js.map