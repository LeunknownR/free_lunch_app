import StorageError from "./StorageError";

export default class IngredientLabel {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new StorageError("Invalid ingredient label");
		this.value = value;
	}
}