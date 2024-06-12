import Ingredient from "../domain/Ingredient";
import IngredientId from "../domain/IngredientId";
import InventoryRepository from "../domain/InventoryRepository";
import RecipeIngredient from "../domain/RecipeIngredient";
import RecipeIngredientQuantity from "../domain/RecipeIngredientQuantity";

export default class RequestIngredientsUseCase {
	constructor(private readonly repository: InventoryRepository) {}
	//#region Methods
	async invoke(
		recipeIngredients: RecipeIngredient[]
	): Promise<RecipeIngredient[]> {
		const inventoryIngredients =
			await this.repository.findRecipeIngredients(recipeIngredients);
		const recipeIngredientsMissing: RecipeIngredient[] = [];
		recipeIngredients.forEach(recipeIngredient => {
			const inventoryIngredient = inventoryIngredients.find(
				({ id }) => id === recipeIngredient.ingredientId
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
			new IngredientId(recipeIngredient.ingredientId),
			new RecipeIngredientQuantity(missingQuantity)
		);
	}
	//#endregion
}
