import Ingredient from "../domain/Ingredient";
import InventoryRepository from "../domain/InventoryRepository";

export default class GetAllIngredientsUseCase {
	constructor(private readonly repository: InventoryRepository) {}
	//#region Methods
	async invoke(): Promise<Ingredient[]> {
		return await this.repository.getAllIngredients();
	}
	//#endregion
}