import Ingredient from "./Ingredient";

export default interface InventoryRepository {
	getAllIngredients(): Promise<Ingredient[]>;
}