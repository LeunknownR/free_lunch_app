import { useEffect, useState } from "react";
import useModal, { ModalHook } from "../../components/Modal/hooks/useModal";
import Ingredient from "../domain/Ingredient";
import RepositoryProvider from "../../shared/infrastructure/persistence/RepositoryProvider";
import SupplyHistoryRecord from "../domain/SupplyHistoryRecord";
import useAppContext from "../../context/useAppContext";

export type SupplyHistoryHook = {
    modal: ModalHook;
    ingredient: Ingredient | null;
	value: SupplyHistoryRecord[];
    viewHistory: (ingredient: Ingredient) => void;
};
const supplyRepository = RepositoryProvider.getSupplyRepository();
const useSupplyHistory = (): SupplyHistoryHook => {
	const { preloader } = useAppContext();
	const modal = useModal();
	const [ingredient, setIngredient] = useState<Ingredient | null>(null);
	const [supplyHistory, setSupplyHistory] = useState<SupplyHistoryRecord[]>([]);
	useEffect(() => {
		if (ingredient?.id)
			fillSupplyHistory(ingredient.id);
	}, [ingredient]);
	async function fillSupplyHistory(ingredientId: string) {
		preloader.show();
		const data = await supplyRepository.getSupplyHistory(ingredientId);
		preloader.hide();
		setSupplyHistory(data);
	}
	function viewHistory(ingredient: Ingredient): void {
		setIngredient(ingredient);
		modal.open();
	}
	return {
		value: supplyHistory,
		modal, ingredient, viewHistory
	};
}

export default useSupplyHistory;