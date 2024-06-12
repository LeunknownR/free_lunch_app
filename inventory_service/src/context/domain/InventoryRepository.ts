import Ingredient from "./Ingredient";
import RecipeIngredient from "./RecipeIngredient";

export default interface InventoryRepository {
	getAllIngredients(): Promise<Ingredient[]>;
	findRecipeIngredients(recipeIngredients: RecipeIngredient[]): Promise<Ingredient[]>;
	updateIngredientStocks(newInventoryIngredients: Ingredient[]): Promise<void>;
}