import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientId {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new SupplyHistoryError("Invalid ingredient id");
		this.value = value;
	}
}