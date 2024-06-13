import OrderRepository from "../domain/orders/OrderRepository";
import OrderSaved from "../domain/orders/OrderSaved";

export default class GetAllOrdersUseCase {
	constructor(private readonly repository: OrderRepository) {}
	//#region Methods
	async invoke(): Promise<OrderSaved[]> {
		return this.repository.getAllOrders();
	}
	//#endregion
}