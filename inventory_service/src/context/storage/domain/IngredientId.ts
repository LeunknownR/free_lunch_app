import StorageError from "./StorageError";

export default class IngredientId {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new StorageError("Invalid ingredient id");
		this.value = value;
	}
}