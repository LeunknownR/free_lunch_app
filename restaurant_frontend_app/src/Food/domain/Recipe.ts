export type RecipeIngredient = {
	id: string;
	label: string;
	quantity: number;
};
type Recipe = {
	id: number;
	name: string;
	description: string;
	image: string;
	ingredients: RecipeIngredient[];
}

export default Recipe;