export default class RecipeError extends Error {
	constructor(message: string) {
		super(message);
	}
}