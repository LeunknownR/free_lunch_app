import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import RequestIngredientsUseCase from "../../application/RequestIngredientsUseCase";
import IngredientId from "../../domain/IngredientId";
import RecipeIngredient from "../../domain/RecipeIngredient";
import RecipeIngredientQuantity from "../../domain/RecipeIngredientQuantity";
import MySqlInventoryRepository from "../persistence/MySqlInventoryRepository";
import QueueContext from "../../shared/infrastructure/message_queue/QueueContext";
import RequestIngredientsSupplyUseCase from "../../application/RequestIngredientsSupplyUseCase";
import DistributeIngredientsUseCase from "../../application/DistributeIngredientsUseCase";
import OrderId from "../../domain/OrderId";

export default async function onRequestIngredientQueue() {
	const queueContext = await QueueContext.getInstance();
	queueContext.requestIngredients.on(async data => {
		const inventoryRepository = new MySqlInventoryRepository(
			MySqlContextProvider.getInventoryDatabase()
		);
		const requestIngredientsUseCase = new RequestIngredientsUseCase(
			inventoryRepository
		);
		const recipeIngredients = data.ingredients.map(
			({ id, quantity }) =>
				new RecipeIngredient(
					new IngredientId(id),
					new RecipeIngredientQuantity(quantity)
				)
		);
		const recipeIngredientsMissing: RecipeIngredient[] =
			await requestIngredientsUseCase.invoke(recipeIngredients);
		const distributeIngredientsUseCase = new DistributeIngredientsUseCase(
			queueContext.ingredientsDistributedQueue
		);
		const orderId = new OrderId(data.orderId);
		if (recipeIngredientsMissing.length === 0) {
			distributeIngredientsUseCase.invoke(orderId);
			return;
		}
		const supplyIngredientsUseCase = new RequestIngredientsSupplyUseCase(
			inventoryRepository,
			queueContext.supplyIngredientQueue
		);
		supplyIngredientsUseCase.invoke(orderId, recipeIngredientsMissing);
	});
}
