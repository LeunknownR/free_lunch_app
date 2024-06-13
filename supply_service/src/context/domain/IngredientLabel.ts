import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientLabel {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new SupplyHistoryError("Invalid ingredient label");
		this.value = value;
	}
}