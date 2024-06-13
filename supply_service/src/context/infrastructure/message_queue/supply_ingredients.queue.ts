import AxiosHttpRequest from "../../../shared/infrastructure/http/AxiosHttpRequest";
import SupplyIngredientsUseCase from "../../application/SupplyIngredientsUseCase";
import IngredientId from "../../domain/IngredientId";
import Ingredient from "../../domain/Ingredient";
import IngredientQuantity from "../../domain/IngredientQuantity";
import QueueContext from "../../shared/infrastructure/message_queue/QueueContext";
import MySqlContextProvider from "../../shared/infrastructure/persistence/MySqlContextProvider";
import MySqlSupplyRepository from "../persistence/MySqlSupplyRepository";
import NotifyIngredientSuppliedUseCase from "../../application/NotifyIngredientSuppliedUseCase";
import OrderId from "../../domain/OrderId";
import IngredientLabel from "../../domain/IngredientLabel";

export default async function onSupplyIngredientQueue() {
	const queueContext = await QueueContext.getInstance();
	queueContext.supplyIngredientQueue.on(async data => {
		const supplyIngredientsUseCase = new SupplyIngredientsUseCase(
			new AxiosHttpRequest(),
			new MySqlSupplyRepository(MySqlContextProvider.getSupplyDatabase())
		);
		const ingredientsRequested = data.ingredients.map(
			({ id, label, quantity }) =>
				new Ingredient(
					new IngredientId(id),
					new IngredientLabel(label),
					new IngredientQuantity(quantity)
				)
		);
		const leftOverIngredients: Ingredient[] =
			await supplyIngredientsUseCase.invoke(ingredientsRequested);
		const notifyIngredientSuppliedUseCase =
			new NotifyIngredientSuppliedUseCase(
				queueContext.ingredientSuppliedQueue
			);
		notifyIngredientSuppliedUseCase.invoke(
			new OrderId(data.orderId),
			leftOverIngredients
		);
	});
}
