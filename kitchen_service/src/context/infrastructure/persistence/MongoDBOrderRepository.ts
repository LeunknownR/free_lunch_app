import MongoDBOrderContext from "../../../../shared/infrastructure/persistence/MongoDBOrderContext";
import Order from "../../domain/orders/Order";
import OrderIssuedOn from "../../domain/orders/OrderIssuedOn";
import OrderRepository from "../../domain/orders/OrderRepository";
import OrderStatus from "../../domain/orders/OrderStatus";
import RecipeId from "../../domain/recipes/RecipeId";

export default class MongoDBOrderRepository implements OrderRepository {
	constructor(private readonly orderDatabase: MongoDBOrderContext) {}
	//#region Methods
	async getAllOrders(): Promise<Order[]> {
		const orders = await this.orderDatabase.Orders.find({});
		return orders.map(document => new Order(
			new RecipeId(document.recipeId),
			new OrderIssuedOn(document.issuedOn),
			new OrderStatus(document.status)
		));
	}
	//#endregion
}