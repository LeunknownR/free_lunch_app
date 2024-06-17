import WebsocketEvent from "../../shared/domain/WebsocketEvent";
import WebsocketServer from "../../shared/domain/WebsocketServer";
import Order from "../domain/orders/Order";
import OrderId from "../domain/orders/OrderId";
import OrderRepository from "../domain/orders/OrderRepository";
import OrderSaved from "../domain/orders/OrderSaved";
import Recipe from "../domain/recipes/Recipe";
import RecipeId from "../domain/recipes/RecipeId";
import OrderDTO from "../infrastructure/api/OrderDTO";

export default class CreateOrderUseCase {
	constructor(
		private readonly repository: OrderRepository,
		private readonly websocketServer: WebsocketServer
	) {}
	//#region Methods
	async invoke(recipe: Recipe): Promise<Order> {
		const orderToCreate = Order.Create(new RecipeId(recipe.id));
		await this.repository.createOrder(orderToCreate);
		const orderSaved: OrderSaved = await this.repository.findOrder(new OrderId(orderToCreate.id));
		this.websocketServer.sendToAllSockets<OrderDTO>(
			WebsocketEvent.NewOrder,
			new OrderDTO(orderSaved)
		);
		return orderToCreate;
	}
	//#endregion
}