import Ingredient from "../domain/Ingredient";
import IngredientId from "../domain/IngredientId";
import InventoryRepository from "../domain/InventoryRepository";
import RecipeIngredient from "../domain/RecipeIngredient";
import RecipeIngredientQuantity from "../domain/RecipeIngredientQuantity";

export default class RequestIngredientsUseCase {
	constructor(private readonly repository: InventoryRepository) {}
	//#region Methods
	/**
	 * @returns {RecipeIngredient[]} Returns recipe ingredients missing.
	 */
	async invoke(
		recipeIngredients: RecipeIngredient[]
	): Promise<RecipeIngredient[]> {
		const inventoryIngredients = await this.findIngredients(
			recipeIngredients
		);
		const recipeIngredientsMissing: RecipeIngredient[] = [];
		recipeIngredients.forEach(recipeIngredient => {
			const inventoryIngredient = inventoryIngredients.find(
				({ id }) => id === recipeIngredient.id
			);
			const missingRecipe = this.takeAndDistribuiteIngredients(
				recipeIngredient,
				inventoryIngredient
			);
			if (missingRecipe) recipeIngredientsMissing.push(missingRecipe);
		});
		await this.repository.updateIngredientStocks(inventoryIngredients);
		return recipeIngredientsMissing;
	}
	private async findIngredients(
		recipeIngredients: RecipeIngredient[]
	): Promise<Ingredient[]> {
		const ingredientIds = recipeIngredients.map(
			recipeIngredient => new IngredientId(recipeIngredient.id)
		);
		return await this.repository.findIngredients(ingredientIds);
	}
	private takeAndDistribuiteIngredients(
		recipeIngredient: RecipeIngredient,
		inventoryIngredient: Ingredient
	): RecipeIngredient | null {
		const requiredQuantity = recipeIngredient.quantity.value;
		const missingQuantity =
			inventoryIngredient.stock.take(requiredQuantity);
		const existingQuantity = requiredQuantity - missingQuantity;
		recipeIngredient.quantity.distribuite(existingQuantity);
		if (missingQuantity === 0) return null;
		return new RecipeIngredient(
			new IngredientId(recipeIngredient.id),
			new RecipeIngredientQuantity(missingQuantity)
		);
	}
	//#endregion
}
