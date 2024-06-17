import Recipe from "../domain/Recipe";
import { Container, IngredientTag } from "./styles";

type FoodCardProps = {
	recipe: Recipe;
};
const FoodCard = ({
	recipe
}: FoodCardProps) => {
	return (
		<Container>
			<img src={`/images/${recipe.image}`} alt={recipe.name}/>
			<h4>{recipe.name}</h4>
			<p>{recipe.description}</p>
			<ul>
				{recipe.ingredients.map(ingredient => (
					<IngredientTag key={ingredient.id} title={ingredient.label}>
						{ingredient.label} x{ingredient.quantity}
					</IngredientTag>
				))}
			</ul>
		</Container>
	);
}

export default FoodCard;