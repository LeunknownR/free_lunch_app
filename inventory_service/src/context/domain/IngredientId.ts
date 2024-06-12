import InventoryError from "./InventoryError";

export default class IngredientId {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new InventoryError("Invalid ingredient id");
		this.value = value;
	}
}