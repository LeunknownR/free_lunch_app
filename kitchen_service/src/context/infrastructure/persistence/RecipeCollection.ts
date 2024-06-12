export type Ingredient = {
	id: string;
	quantity: number;
};
export type RecipeDocument = {
	name: string;
	ingredients: Ingredient[]
};