import {
	RequestIngredientQueue,
	RequestIngredientQueueData,
} from "../domain/RequestIngredientQueueData";
import Recipe from "../domain/recipes/Recipe";

export default class RequestIngredientsUseCase {
	constructor(
		private readonly requestIngredientQueue: RequestIngredientQueue
	) {}
	//#region Methods
	async invoke(recipe: Recipe): Promise<void> {
		const ingredientsRequested: RequestIngredientQueueData[] =
			recipe.ingredients.map(ingredient => ({
				ingredientId: ingredient.id,
				quantity: ingredient.quantity,
			}));
		this.requestIngredientQueue.send(ingredientsRequested);
	}
	//#endregion
}
