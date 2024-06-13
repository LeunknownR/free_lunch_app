import HttpRequest from "../../shared/domain/HttpRequest";
import IngredientId from "../domain/IngredientId";
import Ingredient from "../domain/Ingredient";
import SupplyRepository from "../domain/SupplyRepository";
import IngredientQuantity from "../domain/IngredientQuantity";
import SupplyHistoryRecord from "../domain/SupplyHistoryRecord";
import IngredientLabel from "../domain/IngredientLabel";

const { MARKETPLACE_SERVICE_URL } = process.env;
type MarketPlaceServiceResponseData = {
	quantitySold: number;
};
export default class SupplyIngredientsUseCase {
	constructor(
		private readonly httpRequest: HttpRequest,
		private readonly supplyRepository: SupplyRepository
	) {}
	//#region Methods
	async invoke(ingredientsRequested: Ingredient[]): Promise<Ingredient[]> {
		const leftOverIngredients: Ingredient[] = [];
		const promises = ingredientsRequested.map<Promise<void>>(
			async ingredient => {
				const leftOverIngredient = await this.attendIngredientOrder(
					ingredient
				);
				if (leftOverIngredient)
					leftOverIngredients.push(leftOverIngredient);
			}
		);
		await Promise.all(promises);
		return leftOverIngredients;
	}
	private async attendIngredientOrder(
		ingredient: Ingredient
	): Promise<Ingredient | null> {
		let i = 0;
		while (true) {
			i++;
			if (i === 20) 
				throw new Error("El while no termina :C");
			const quantitySold = await this.buyIngredients(
				ingredient.id
			);
			this.recordSupply(ingredient, quantitySold);
			const leftOverQuantity = ingredient.quantity.supply(quantitySold);
			if (leftOverQuantity > 0)
				return this.getLeftOverIngredient(ingredient, leftOverQuantity);
			if (ingredient.quantity.value === 0) return null;
		}
	}
	private recordSupply(ingredient: Ingredient, quantitySold: number): void {
		// Nota: No hace falta esperar que termine para el proceso
		this.supplyRepository.recordSupply(
			SupplyHistoryRecord.Record(
				new IngredientId(ingredient.id),
				new IngredientLabel(ingredient.label),
				new IngredientQuantity(quantitySold)
			)
		);
	}
	private getLeftOverIngredient(
		ingredient: Ingredient,
		leftOverQuantity: number
	): Ingredient {
		return new Ingredient(
			new IngredientId(ingredient.id),
			new IngredientId(ingredient.label),
			new IngredientQuantity(leftOverQuantity)
		);
	}
	private async buyIngredients(ingredientId: string) {
		const { data } =
			await this.httpRequest.get<MarketPlaceServiceResponseData>(
				MARKETPLACE_SERVICE_URL,
				{ ingredient: ingredientId }
			);
		return data.quantitySold;
	}
	//#endregion
}
