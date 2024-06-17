import { useEffect, useState } from "react";
import Recipe from "../domain/Recipe";
import RepositoryProvider from "../../shared/infrastructure/persistence/RepositoryProvider";
import { PreloaderHook } from "../../components/Preloader/hooks/usePreloader";

const recipeRepository = RepositoryProvider.getRecipeRepository();
const useRecipes = (preloader: PreloaderHook): 	Recipe[] => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	useEffect(() => {
		fillRecipes();
	}, []);
	async function fillRecipes(): Promise<void> {
		preloader.show();
		const data = await recipeRepository.getAllRecipes();
		preloader.hide();
		setRecipes(data);
	}
	return recipes;
}

export default useRecipes;