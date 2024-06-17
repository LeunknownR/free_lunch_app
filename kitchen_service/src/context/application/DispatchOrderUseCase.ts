import WebsocketEvent from "../../shared/domain/WebsocketEvent";
import WebsocketServer from "../../shared/domain/WebsocketServer";
import OrderId from "../domain/orders/OrderId";
import OrderRepository from "../domain/orders/OrderRepository";
import OrderSaved from "../domain/orders/OrderSaved";
import OrderDTO from "../infrastructure/api/OrderDTO";

export default class DispatchOrderUseCase {
	constructor(
		private readonly repository: OrderRepository,
		private readonly websocketServer: WebsocketServer
	) {}
	//#region Methods
	async invoke(orderId: OrderId): Promise<void> {
		const order: OrderSaved = await this.repository.findOrder(orderId);
		order.dispatch();
		await this.repository.updateOrderStatus(order);
		this.websocketServer.sendToAllSockets(WebsocketEvent.UpdateOrder, new OrderDTO(order));
	}
	//#endregion
}
