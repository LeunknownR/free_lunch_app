"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const http_1 = require("http");
const message_queues_1 = __importDefault(require("./message_queues"));
const websockets_1 = __importDefault(require("./websockets"));
const SocketIoServer_1 = __importDefault(require("./shared/infrastructure/websockets/SocketIoServer"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
app.use(express_1.default.json({
    limit: "5mb"
}));
SocketIoServer_1.default.connect(server);
(0, websockets_1.default)();
(0, message_queues_1.default)();
app.use(routers_1.default);
const { PORT } = process.env;
server.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
//# sourceMappingURL=app.js.map