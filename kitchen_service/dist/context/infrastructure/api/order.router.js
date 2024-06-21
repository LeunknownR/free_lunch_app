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
const express_1 = require("express");
const OrderDTO_1 = __importDefault(require("./OrderDTO"));
const GetAllOrdersUseCase_1 = __importDefault(require("../../application/GetAllOrdersUseCase"));
const MongoDBOrderRepository_1 = __importDefault(require("../persistence/MongoDBOrderRepository"));
const GetOneRecipeUseCase_1 = __importDefault(require("../../application/GetOneRecipeUseCase"));
const MongoDBRecipeRepository_1 = __importDefault(require("../persistence/MongoDBRecipeRepository"));
const MongoDBContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MongoDBContextProvider"));
const QueueContext_1 = __importDefault(require("../../shared/message_queue/QueueContext"));
const RequestIngredientsUseCase_1 = __importDefault(require("../../application/RequestIngredientsUseCase"));
const CreateOrderUseCase_1 = __importDefault(require("../../application/CreateOrderUseCase"));
const SocketIoServer_1 = __importDefault(require("../../../shared/infrastructure/websockets/SocketIoServer"));
const withErrorHandler_1 = __importDefault(require("../../../shared/infrastructure/api/withErrorHandler"));
const router = (0, express_1.Router)();
router.get("/", (0, withErrorHandler_1.default)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderDatabase = yield MongoDBContextProvider_1.default.getOrderDatabase();
    const getAllOrdersUseCase = new GetAllOrdersUseCase_1.default(new MongoDBOrderRepository_1.default(orderDatabase));
    const allOrders = yield getAllOrdersUseCase.invoke();
    res.json({
        data: {
            orders: allOrders.map(order => new OrderDTO_1.default(order)),
        },
        message: "SUCCESS",
    });
})));
router.post("/", (0, withErrorHandler_1.default)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderDatabase = yield MongoDBContextProvider_1.default.getOrderDatabase();
        const getOneRecipeUseCase = new GetOneRecipeUseCase_1.default(new MongoDBRecipeRepository_1.default(orderDatabase));
        const oneRecipe = yield getOneRecipeUseCase.invoke();
        const createOrderUseCase = new CreateOrderUseCase_1.default(new MongoDBOrderRepository_1.default(orderDatabase), SocketIoServer_1.default.getInstance());
        const orderCreated = yield createOrderUseCase.invoke(oneRecipe);
        const queueContext = yield QueueContext_1.default.getInstance();
        const requestIngredientsUseCase = new RequestIngredientsUseCase_1.default(queueContext.requestIngredients);
        requestIngredientsUseCase.invoke(orderCreated, oneRecipe);
        res.json({
            data: null,
            message: "SUCCESS",
        });
    }
    catch (err) {
        res.status(500).json({
            data: null,
            message: "ERROR",
        });
    }
})));
const serviceRouter = {
    path: "/orders",
    router,
};
exports.default = serviceRouter;
//# sourceMappingURL=order.router.js.map