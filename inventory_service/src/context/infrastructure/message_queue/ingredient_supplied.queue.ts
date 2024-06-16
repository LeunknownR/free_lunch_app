import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import IngredientId from "../../domain/IngredientId";
import MySqlInventoryRepository from "../persistence/MySqlInventoryRepository";
import QueueContext from "../../shared/infrastructure/message_queue/QueueContext";
import SupplyIngredientsUseCase from "../../application/SupplyIngredientsUseCase";
import IngredientSupplied from "../../domain/IngredientSupplied";
import IngredientSuppliedQuantity from "../../domain/IngredientSuppliedQuantity";
import DistributeIngredientsUseCase from "../../application/DistributeIngredientsUseCase";
import OrderId from "../../domain/OrderId";

export default async function onIngredientSuppliedQueue() {
	const queueContext = await QueueContext.getInstance();
	queueContext.ingredientSuppliedQueue.on(async data => {
		const { orderId, leftOverIngredients } = data;
		const distributeIngredientsUseCase = new DistributeIngredientsUseCase(
			queueContext.ingredientsDistributedQueue
		);
		distributeIngredientsUseCase.invoke(new OrderId(orderId));
		const supplyIngredientsUseCase = new SupplyIngredientsUseCase(
			new MySqlInventoryRepository(
				MySqlContextProvider.getInventoryDatabase()
			)
		);
		supplyIngredientsUseCase.invoke(
			leftOverIngredients.map(
				({ id, quantity }) =>
					new IngredientSupplied(
						new IngredientId(id),
						new IngredientSuppliedQuantity(quantity)
					)
			)
		);
	});
}
