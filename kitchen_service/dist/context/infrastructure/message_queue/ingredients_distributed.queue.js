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
const MongoDBContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MongoDBContextProvider"));
const SocketIoServer_1 = __importDefault(require("../../../shared/infrastructure/websockets/SocketIoServer"));
const DispatchOrderUseCase_1 = __importDefault(require("../../application/DispatchOrderUseCase"));
const OrderId_1 = __importDefault(require("../../domain/orders/OrderId"));
const QueueContext_1 = __importDefault(require("../../shared/message_queue/QueueContext"));
const MongoDBOrderRepository_1 = __importDefault(require("../persistence/MongoDBOrderRepository"));
function onIngredientDistribuitedQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        const queueContext = yield QueueContext_1.default.getInstance();
        queueContext.ingredientsDistributedQueue.on((data) => __awaiter(this, void 0, void 0, function* () {
            const orderId = new OrderId_1.default(data.orderId);
            const orderDatabase = yield MongoDBContextProvider_1.default.getOrderDatabase();
            const dispatchOrderUseCase = new DispatchOrderUseCase_1.default(new MongoDBOrderRepository_1.default(orderDatabase), SocketIoServer_1.default.getInstance());
            dispatchOrderUseCase.invoke(orderId);
        }));
    });
}
exports.default = onIngredientDistribuitedQueue;
//# sourceMappingURL=ingredients_distributed.queue.js.map