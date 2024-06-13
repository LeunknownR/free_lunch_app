import {
	RequestIngredientQueue,
	RequestIngredientQueueData,
} from "../domain/queue_data/RequestIngredientQueueData";
import Order from "../domain/orders/Order";
import Recipe from "../domain/recipes/Recipe";

export default class RequestIngredientsUseCase {
	constructor(
		private readonly requestIngredientQueue: RequestIngredientQueue
	) {}
	//#region Methods
	async invoke(orderCreated: Order, recipe: Recipe): Promise<void> {
		const requestIngredientPayload: RequestIngredientQueueData = {
			orderId: orderCreated.id,
			ingredients: recipe.ingredients.map(ingredient => ({
				id: ingredient.id,
				quantity: ingredient.quantity,
			}))
		};
		this.requestIngredientQueue.send(requestIngredientPayload);
	}
	//#endregion
}
