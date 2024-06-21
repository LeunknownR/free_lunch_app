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
const WebsocketEvent_1 = __importDefault(require("../../../shared/domain/WebsocketEvent"));
const MongoDBContextProvider_1 = __importDefault(require("../../../shared/infrastructure/persistence/MongoDBContextProvider"));
const SocketIoServer_1 = __importDefault(require("../../../shared/infrastructure/websockets/SocketIoServer"));
const GetAllOrdersUseCase_1 = __importDefault(require("../../application/GetAllOrdersUseCase"));
const OrderDTO_1 = __importDefault(require("../api/OrderDTO"));
const MongoDBOrderRepository_1 = __importDefault(require("../persistence/MongoDBOrderRepository"));
function onConnectionWebsocket() {
    const socketIoServer = SocketIoServer_1.default.getInstance();
    socketIoServer.addConnectionSubscriber((socket) => __awaiter(this, void 0, void 0, function* () {
        const orderDatabase = yield MongoDBContextProvider_1.default.getOrderDatabase();
        const getAllOrdersUseCase = new GetAllOrdersUseCase_1.default(new MongoDBOrderRepository_1.default(orderDatabase));
        const allOrders = yield getAllOrdersUseCase.invoke();
        socket.emit(WebsocketEvent_1.default.SendOrders, allOrders.map(order => new OrderDTO_1.default(order)));
    }));
}
exports.default = onConnectionWebsocket;
//# sourceMappingURL=connection.websocket.js.map