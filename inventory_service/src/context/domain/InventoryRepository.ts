import Ingredient from "./Ingredient";
import IngredientId from "./IngredientId";

export default interface InventoryRepository {
	getAllIngredients(): Promise<Ingredient[]>;
	findIngredients(ingredientsIds: IngredientId[]): Promise<Ingredient[]>;
	updateIngredientStocks(newInventoryIngredients: Ingredient[]): Promise<void>;
}