import useAppContext from "../context/useAppContext";
import useTitle from "../hooks/useTitle";
import DashboardLayout from "../layout/DashboardLayout";
import FoodCard from "./FoodCard";
import Header from "./Header";
import { FoodWrapper } from "./styles";

const FoodView = () => {
	useTitle("Comida");
	const { recipes } = useAppContext();
	return (
		<DashboardLayout>
			<Header/>
			<FoodWrapper>
				{recipes.map(recipe => (
					<FoodCard key={recipe.id} recipe={recipe}/>
				))}
			</FoodWrapper>
		</DashboardLayout>
	);
}

export default FoodView;