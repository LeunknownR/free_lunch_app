import HttpRequest from "../../shared/domain/HttpRequest";
import IngredientId from "../domain/IngredientId";
import Ingredient from "../domain/Ingredient";
import SupplyRepository from "../domain/SupplyRepository";
import IngredientQuantity from "../domain/IngredientQuantity";
import SupplyHistoryRecord from "../domain/SupplyHistoryRecord";

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
		const boughts = ingredientsRequested.map<Promise<void>>(
			async ingredient => {
				const leftOverIngredient = await this.attendIngredientOrder(
					ingredient
				);
				if (leftOverIngredient)
					leftOverIngredients.push(leftOverIngredient);
			}
		);
		await Promise.all(boughts);
		return leftOverIngredients;
	}
	private async attendIngredientOrder(
		ingredient: Ingredient
	): Promise<Ingredient | null> {
		while (true) {
			const quantitySold = await this.buyIngredients(
				ingredient.id
			);
			if (quantitySold === 0) 
				return;
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
			SupplyHistoryRecord.Create(
				new IngredientId(ingredient.id),
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
