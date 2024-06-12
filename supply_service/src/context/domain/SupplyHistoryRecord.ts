import SupplyHistoryRecordId from "./SupplyHistoryRecordId";
import IngredientQuantity from "./IngredientQuantity";
import IngredientSuppliedOn from "./IngredientSuppliedOn";

export default class SupplyHistoryRecord {
	constructor(
		private readonly _id: SupplyHistoryRecordId,
		readonly quantity: IngredientQuantity,
		private readonly _suppliedOn: IngredientSuppliedOn
	) {}
	get id(): number {
		return this._id.value;
	}
	get suppliedOn(): Date {
		return this._suppliedOn.value;
	}
}
