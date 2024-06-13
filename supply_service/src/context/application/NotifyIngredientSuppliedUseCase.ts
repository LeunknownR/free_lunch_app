import Ingredient from "../domain/Ingredient";
import OrderId from "../domain/OrderId";
import { IngredientSuppliedQueue } from "../domain/queue_data/IngredientSuppliedQueueData";

export default class NotifyIngredientSuppliedUseCase {
	constructor(
		private readonly ingredientSuppliedQueue: IngredientSuppliedQueue
	) {}
	//#region Methods
	invoke(orderId: OrderId, leftOverIngredients: Ingredient[]): void {
		this.ingredientSuppliedQueue.send({
			orderId: orderId.value,
			leftOverIngredients: leftOverIngredients.map(ingredient => ({
				id: ingredient.id,
				quantity: ingredient.quantity.value,
			})),
		});
	}
	//#endregion
}
