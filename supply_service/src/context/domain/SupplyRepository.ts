import IngredientId from "./IngredientId";
import SupplyHistoryRecord from "./SupplyHistoryRecord";

export default interface SupplyRepository {
	getSupplyHistory(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]>;
	recordSupply(supplyHistoryRecord: SupplyHistoryRecord): Promise<void>;
}