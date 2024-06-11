import Ingredient from "../domain/Ingredient";
import StorageRepository from "../domain/StorageRepository";

export default class GetAllIngredientsUseCase {
	constructor(private readonly repository: StorageRepository) {}
	//#region Methods
	async invoke(): Promise<Ingredient[]> {
		return await this.repository.getAllIngredients();
	}
	//#endregion
}