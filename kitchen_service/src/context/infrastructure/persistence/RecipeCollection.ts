export type Ingredient = {
	id: string;
	quantity: number;
};
export type RecipeDocument = {
	_id: number;
	name: string;
	ingredients: Ingredient[]
};