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
const WebsocketEvent_1 = __importDefault(require("../../shared/domain/WebsocketEvent"));
const Order_1 = __importDefault(require("../domain/orders/Order"));
const OrderId_1 = __importDefault(require("../domain/orders/OrderId"));
const RecipeId_1 = __importDefault(require("../domain/recipes/RecipeId"));
const OrderDTO_1 = __importDefault(require("../infrastructure/api/OrderDTO"));
class CreateOrderUseCase {
    constructor(repository, websocketServer) {
        this.repository = repository;
        this.websocketServer = websocketServer;
    }
    //#region Methods
    invoke(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderToCreate = Order_1.default.Create(new RecipeId_1.default(recipe.id));
            yield this.repository.createOrder(orderToCreate);
            const orderSaved = yield this.repository.findOrder(new OrderId_1.default(orderToCreate.id));
            this.websocketServer.sendToAllSockets(WebsocketEvent_1.default.NewOrder, new OrderDTO_1.default(orderSaved));
            return orderToCreate;
        });
    }
}
exports.default = CreateOrderUseCase;
//# sourceMappingURL=CreateOrderUseCase.js.map