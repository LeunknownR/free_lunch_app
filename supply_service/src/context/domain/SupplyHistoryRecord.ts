import SupplyHistoryRecordId from "./SupplyHistoryRecordId";
import IngredientSuppliedOn from "./IngredientSuppliedOn";
import IngredientId from "./IngredientId";
import IngredientQuantity from "./IngredientQuantity";

export default class SupplyHistoryRecord {
	constructor(
		private readonly _id: SupplyHistoryRecordId,
		private readonly _ingredientId: IngredientId,
		readonly quantity: IngredientQuantity,
		private readonly _suppliedOn: IngredientSuppliedOn
	) {}
	static Create(
		ingredientId: IngredientId,
		ingredientQuantity: IngredientQuantity
	): SupplyHistoryRecord {
		return new SupplyHistoryRecord(
			SupplyHistoryRecordId.Create(),
			ingredientId,
			ingredientQuantity,
			IngredientSuppliedOn.Issue()
		);
	}
	get id(): string {
		return this._id.value;
	}
	get ingredientId(): string {
		return this._ingredientId.value;
	}
	get suppliedOn(): Date {
		return this._suppliedOn.value;
	}
}
