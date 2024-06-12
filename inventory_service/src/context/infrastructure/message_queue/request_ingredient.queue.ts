import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import RequestIngredientsUseCase from "../../application/RequestIngredientsUseCase";
import IngredientId from "../../domain/IngredientId";
import RecipeIngredient from "../../domain/RecipeIngredient";
import RecipeIngredientQuantity from "../../domain/RecipeIngredientQuantity";
import MySqlInventoryRepository from "../persistence/MySqlInventoryRepository";
import QueueContext from "../../shared/infrastructure/message_queue/QueueContext";

export default async function onQueue() {
	const queue = await QueueContext.getInstance();
	queue.requestIngredients.on(data => {
		const requestIngredientsUseCase = new RequestIngredientsUseCase(
			new MySqlInventoryRepository(
				MySqlContextProvider.getInventoryDatabase()
			)
		);
		const recipeIngredients = data.map(
			({ ingredientId, quantity }) =>
				new RecipeIngredient(
					new IngredientId(ingredientId),
					new RecipeIngredientQuantity(quantity)
				)
		);
		requestIngredientsUseCase.invoke(recipeIngredients);
	});
}
