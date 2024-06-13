import Order from "../domain/orders/Order";
import OrderId from "../domain/orders/OrderId";
import OrderRepository from "../domain/orders/OrderRepository";

export default class DispatchOrderUseCase {
	constructor(private readonly repository: OrderRepository) {}
	//#region Methods
	async invoke(orderId: OrderId): Promise<void> {
		const order: Order = await this.repository.findOrder(orderId);
		order.dispatch();
		await this.repository.updateOrderStatus(order);
	}
	//#endregion
}