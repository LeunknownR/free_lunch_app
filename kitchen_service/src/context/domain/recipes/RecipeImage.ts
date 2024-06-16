import RecipeError from "./RecipeError";

export default class RecipeImage {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new RecipeError("Invalid recipe image");
		this.value = value;
	}
}