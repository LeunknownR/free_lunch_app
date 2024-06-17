import { Server } from "socket.io";
import HttpServer from "../api/HttpServer";
import WebsocketEvent from "../../domain/WebsocketEvent";
import WebsocketServer from "../../domain/WebsocketServer";
import WebsocketSubscriber from "../../domain/WebsocketSubscriber";

export default class SocketIoServer implements WebsocketServer {
	private static instance: SocketIoServer;
	private readonly server: Server;
	private readonly subscribers: WebsocketSubscriber[] = [];
	constructor(httpServer: HttpServer) {
		this.server = new Server(httpServer);
		this.onConnection();
	}
	static getInstance(): SocketIoServer {
		return SocketIoServer.instance;
	}
	static connect(httpServer: HttpServer) {
		if (!SocketIoServer.instance)
			SocketIoServer.instance = new SocketIoServer(httpServer);
	}
	private onConnection() {
		this.server.on("connection", socket => {
			this.subscribers.forEach(subscriber => subscriber(socket));
		});
	}
	addConnectionSubscriber(subscriber: WebsocketSubscriber) {
		this.subscribers.push(subscriber);
	}
	sendToAllSockets<D>(event: WebsocketEvent, data: D) {
		this.server.emit(event, data);
	}
}