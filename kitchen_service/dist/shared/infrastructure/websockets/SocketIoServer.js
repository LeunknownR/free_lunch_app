"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class SocketIoServer {
    constructor(httpServer) {
        this.subscribers = [];
        this.server = new socket_io_1.Server(httpServer);
        this.onConnection();
    }
    static getInstance() {
        return SocketIoServer.instance;
    }
    static connect(httpServer) {
        if (!SocketIoServer.instance)
            SocketIoServer.instance = new SocketIoServer(httpServer);
    }
    onConnection() {
        this.server.on("connection", socket => {
            this.subscribers.forEach(subscriber => subscriber(socket));
        });
    }
    addConnectionSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }
    sendToAllSockets(event, data) {
        this.server.emit(event, data);
    }
}
exports.default = SocketIoServer;
//# sourceMappingURL=SocketIoServer.js.map