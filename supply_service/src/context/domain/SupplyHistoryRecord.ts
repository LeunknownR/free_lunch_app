import SupplyHistoryRecordId from "./SupplyHistoryRecordId";
import IngredientSuppliedOn from "./IngredientSuppliedOn";
import IngredientId from "./IngredientId";
import IngredientQuantity from "./IngredientQuantity";
import IngredientLabel from "./IngredientLabel";

export default class SupplyHistoryRecord {
	constructor(
		private readonly _id: SupplyHistoryRecordId,
		private readonly _ingredientId: IngredientId,
		private readonly _ingredientLabel: IngredientLabel,
		readonly quantity: IngredientQuantity,
		private readonly _suppliedOn: IngredientSuppliedOn
	) {}
	static Record(
		ingredientId: IngredientId,
		ingredientLabel: IngredientLabel,
		ingredientQuantity: IngredientQuantity
	): SupplyHistoryRecord {
		return new SupplyHistoryRecord(
			SupplyHistoryRecordId.Create(),
			ingredientId,
			ingredientLabel,
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
	get ingredientLabel(): string {
		return this._ingredientLabel.value;
	}
	get suppliedOn(): Date {
		return this._suppliedOn.value;
	}
}
