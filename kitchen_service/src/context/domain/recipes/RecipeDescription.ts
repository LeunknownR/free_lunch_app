import RecipeError from "./RecipeError";

export default class RecipeDescription {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new RecipeError("Invalid recipe name");
		this.value = value;
	}
}