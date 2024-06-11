import StorageError from "./StorageError";

export default class IngredientStock {
	readonly value: number;
	constructor(value: number) {
		if (!this.isPositiveNumberOrZero(value)) 
			throw new StorageError("Invalid ingredient stock");
		this.value = value;
	}
	isPositiveNumberOrZero(value: number): boolean {
		return value >= 0;
	}
}