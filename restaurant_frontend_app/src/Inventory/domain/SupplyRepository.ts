import SupplyHistoryRecord from "./SupplyHistoryRecord";

export default interface SupplyRepository {
	getSupplyHistory(ingredientId: string): Promise<SupplyHistoryRecord[]>;
}