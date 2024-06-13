import IngredientId from "../domain/IngredientId";
import SupplyHistoryRecord from "../domain/SupplyHistoryRecord";
import SupplyRepository from "../domain/SupplyRepository";

export default class GetSupplyHistoryUseCase {
	constructor(private readonly repository: SupplyRepository) {}
	//#region Methods
	async invoke(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]> {
		return await this.repository.getSupplyHistory(ingredientId);
	}
	//#endregion
}