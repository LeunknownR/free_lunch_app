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
const IngredientId_1 = __importDefault(require("../../domain/IngredientId"));
const MySqlInventoryRepository_1 = __importDefault(require("../persistence/MySqlInventoryRepository"));
const QueueContext_1 = __importDefault(require("../../shared/infrastructure/message_queue/QueueContext"));
const SupplyIngredientsUseCase_1 = __importDefault(require("../../application/SupplyIngredientsUseCase"));
const IngredientSupplied_1 = __importDefault(require("../../domain/IngredientSupplied"));
const IngredientSuppliedQuantity_1 = __importDefault(require("../../domain/IngredientSuppliedQuantity"));
const DistributeIngredientsUseCase_1 = __importDefault(require("../../application/DistributeIngredientsUseCase"));
const OrderId_1 = __importDefault(require("../../domain/OrderId"));
function onIngredientSuppliedQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        const queueContext = yield QueueContext_1.default.getInstance();
        queueContext.ingredientSuppliedQueue.on((data) => __awaiter(this, void 0, void 0, function* () {
            const { orderId, leftOverIngredients } = data;
            const distributeIngredientsUseCase = new DistributeIngredientsUseCase_1.default(queueContext.ingredientsDistributedQueue);
            distributeIngredientsUseCase.invoke(new OrderId_1.default(orderId));
            if (leftOverIngredients.length === 0)
                return;
            const supplyIngredientsUseCase = new SupplyIngredientsUseCase_1.default(new MySqlInventoryRepository_1.default(MySqlContextProvider_1.default.getInventoryDatabase()));
            supplyIngredientsUseCase.invoke(leftOverIngredients.map(({ id, quantity }) => new IngredientSupplied_1.default(new IngredientId_1.default(id), new IngredientSuppliedQuantity_1.default(quantity))));
        }));
    });
}
exports.default = onIngredientSuppliedQueue;
//# sourceMappingURL=ingredient_supplied.queue.js.map