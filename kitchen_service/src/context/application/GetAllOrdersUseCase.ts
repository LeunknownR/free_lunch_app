import Order from "../domain/orders/Order";
import OrderRepository from "../domain/orders/OrderRepository";

export default class GetAllOrdersUseCase {
	constructor(private readonly repository: OrderRepository) {}
	//#region Methods
	async invoke(): Promise<Order[]> {
		return this.repository.getAllOrders();
	}
	//#endregion
}