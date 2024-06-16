import InventoryError from "./InventoryError";

export default class IngredientImage {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new InventoryError("Invalid ingredient image");
		this.value = value;
	}
}