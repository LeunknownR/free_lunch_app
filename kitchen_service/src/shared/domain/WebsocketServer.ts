import WebsocketEvent from "./WebsocketEvent";
import WebsocketSubscriber from "./WebsocketSubscriber";

export default interface WebsocketServer {
	addConnectionSubscriber(subscriber: WebsocketSubscriber): void;
	sendToAllSockets<D>(event: WebsocketEvent, data: D): void;
}