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
const AxiosHttpRequest_1 = __importDefault(require("../../../shared/infrastructure/http/AxiosHttpRequest"));
const SupplyIngredientsUseCase_1 = __importDefault(require("../../application/SupplyIngredientsUseCase"));
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const Ingredient_1 = __importDefault(require("../../domain/Ingredient"));
const IngredientQuantity_1 = __importDefault(require("../../domain/IngredientQuantity"));
const QueueContext_1 = __importDefault(require("../../shared/infrastructure/message_queue/QueueContext"));
const MySqlContextProvider_1 = __importDefault(require("../../shared/infrastructure/persistence/MySqlContextProvider"));
const MySqlSupplyRepository_1 = __importDefault(require("../persistence/MySqlSupplyRepository"));
const NotifyIngredientSuppliedUseCase_1 = __importDefault(require("../../application/NotifyIngredientSuppliedUseCase"));
const OrderId_1 = __importDefault(require("../../domain/OrderId"));
function onSupplyIngredientQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        const queueContext = yield QueueContext_1.default.getInstance();
        queueContext.supplyIngredientQueue.on((data) => __awaiter(this, void 0, void 0, function* () {
            const supplyIngredientsUseCase = new SupplyIngredientsUseCase_1.default(new AxiosHttpRequest_1.default(), new MySqlSupplyRepository_1.default(MySqlContextProvider_1.default.getSupplyDatabase()));
            const ingredientsRequested = data.ingredients.map(({ id, quantity }) => new Ingredient_1.default(new IngredientId_1.default(id), new IngredientQuantity_1.default(quantity)));
            const leftOverIngredients = yield supplyIngredientsUseCase.invoke(ingredientsRequested);
            const notifyIngredientSuppliedUseCase = new NotifyIngredientSuppliedUseCase_1.default(queueContext.ingredientSuppliedQueue);
            notifyIngredientSuppliedUseCase.invoke(new OrderId_1.default(data.orderId), leftOverIngredients);
        }));
    });
}
exports.default = onSupplyIngredientQueue;
//# sourceMappingURL=supply_ingredients.queue.js.map