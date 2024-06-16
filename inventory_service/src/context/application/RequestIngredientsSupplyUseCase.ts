import IngredientId from "../domain/IngredientId";
import InventoryRepository from "../domain/InventoryRepository";
import OrderId from "../domain/OrderId";
import RecipeIngredient from "../domain/RecipeIngredient";
import IngredientQueueData from "../domain/queue_data/IngredientQueueData";
import {
	SupplyIngredientQueue,
} from "../domain/queue_data/SupplyIngredientQueueData";

export default class RequestIngredientsSupplyUseCase {
	constructor(
		private readonly inventoryRepository: InventoryRepository,
		private readonly supplyIngredientQueue: SupplyIngredientQueue
	) {}
	//#region Methods
	async invoke(
		orderId: OrderId,
		recipeIngredients: RecipeIngredient[]
	): Promise<void> {
		const inventoryIngredients =
			await this.inventoryRepository.findIngredients(
				recipeIngredients.map(
					ingredient => new IngredientId(ingredient.id)
				)
			);
		const ingredientsToSupply: IngredientQueueData[] = inventoryIngredients.map(inventoryIngredient => ({
			id: inventoryIngredient.id,
			quantity: recipeIngredients.find(
				({ id: ingredientId }) =>
					ingredientId === inventoryIngredient.id
			).quantity.value,
		}));
		this.supplyIngredientQueue.send({
			orderId: orderId.value,
			ingredients: ingredientsToSupply
		});
	}
	//#endregion
}
