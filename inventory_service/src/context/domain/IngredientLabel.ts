import InventoryError from "./InventoryError";

export default class IngredientLabel {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new InventoryError("Invalid ingredient label");
		this.value = value;
	}
}