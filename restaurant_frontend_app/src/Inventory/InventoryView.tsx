import { useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Table from "../components/Table";
import DashboardLayout from "../layout/DashboardLayout";
import RepositoryProvider from "../shared/infrastructure/persistence/RepositoryProvider";
import TableIngredientRow from "./TableIngredientRow";
import Ingredient from "./domain/Ingredient";
import { INGREDIENT_TABLE_HEADERS } from "./constants";
import SupplyHistoryModal from "./SupplyHistoryModal";
import useSupplyHistory from "./hooks/useSupplyHistory";
import useTitle from "../hooks/useTitle";
import useAppContext from "../context/useAppContext";

const inventoryRepository = RepositoryProvider.getInventoryRepository();
const InventoryView = () => {
	useTitle("Inventario");
	const { preloader } = useAppContext();
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const supplyHistory = useSupplyHistory();
	useEffect(() => {
		fillIngredients();
	}, []);
	async function fillIngredients() {
		preloader.show();
		const data = await inventoryRepository.getAllIngredients();
		preloader.hide();
		setIngredients(data);
	}
	return (
		<DashboardLayout>
			<HeaderSection
				title="Inventario"
				description="Aquí puedes revisar el estado del inventario actual del restaurante."/>
			<Table headers={INGREDIENT_TABLE_HEADERS}>
				{ingredients.map((ingredient, index) => (				
					<TableIngredientRow
						key={index}
						index={index}
						ingredient={ingredient}
						viewSupplyHistory={supplyHistory.viewHistory}/>
				))}
			</Table>
			<SupplyHistoryModal supplyHistory={supplyHistory}/>
		</DashboardLayout>
	);
}

export default InventoryView;