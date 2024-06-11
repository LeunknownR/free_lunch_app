import Ingredient from "./Ingredient";

export default interface StorageRepository {
	getAllIngredients(): Promise<Ingredient[]>;	
}