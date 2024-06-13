import Order from "../domain/orders/Order";
import OrderRepository from "../domain/orders/OrderRepository";
import Recipe from "../domain/recipes/Recipe";
import RecipeId from "../domain/recipes/RecipeId";

export default class CreateOrderUseCase {
	constructor(private readonly repository: OrderRepository) {}
	//#region Methods
	async invoke(recipe: Recipe): Promise<Order> {
		const orderToCreate = Order.Create(new RecipeId(recipe.id));
		await this.repository.createOrder(orderToCreate);
		return orderToCreate;
	}
	//#endregion
}