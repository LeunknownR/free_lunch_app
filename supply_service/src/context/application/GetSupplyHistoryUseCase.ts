import IngredientId from "../domain/IngredientId";
import SupplyHistoryRecord from "../domain/SupplyHistoryRecord";
import SupplyingRepository from "../domain/SupplyingRepository";

export default class GetSupplyHistoryUseCase {
	constructor(private readonly repository: SupplyingRepository) {}
	//#region Methods
	async invoke(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]> {
		return await this.repository.getSupplyHistory(ingredientId);
	}
	//#endregion
}