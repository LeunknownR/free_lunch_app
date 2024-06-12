import IngredientId from "./IngredientId";
import SupplyHistoryRecord from "./SupplyHistoryRecord";

export default interface SupplyingRepository {
	getSupplyHistory(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]>;
}