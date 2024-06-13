import IngredientId from "../domain/IngredientId";
import IngredientSupplied from "../domain/IngredientSupplied";
import InventoryRepository from "../domain/InventoryRepository";

export default class SupplyIngredientsUseCase {
	constructor(private readonly repository: InventoryRepository) {}
	//#region Methods
	async invoke(ingredientsSupplied: IngredientSupplied[]): Promise<void> {
		const inventoryIngredients = await this.repository.findIngredients(
			ingredientsSupplied.map(
				({ ingredientId }) => new IngredientId(ingredientId)
			)
		);
		inventoryIngredients.forEach(currentIngredient => {
			const recipeIngredient = ingredientsSupplied.find(
				({ ingredientId }) => ingredientId === currentIngredient.id
			);
			currentIngredient.stock.supply(recipeIngredient.quantity);
		});
		this.repository.updateIngredientStocks(inventoryIngredients);
	}
	//#endregion
}
