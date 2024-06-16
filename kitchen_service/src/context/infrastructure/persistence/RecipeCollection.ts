export type Ingredient = {
	id: string;
	label: string;
	quantity: number;
};
export type RecipeDocument = {
	_id: number;
	name: string;
	description: string;
	image: string;
	ingredients: Ingredient[]
};