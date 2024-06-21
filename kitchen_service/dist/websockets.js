"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_websocket_1 = __importDefault(require("./context/infrastructure/websockets/connection.websocket"));
function onWebsockets() {
    (0, connection_websocket_1.default)();
}
exports.default = onWebsockets;
//# sourceMappingURL=websockets.js.map