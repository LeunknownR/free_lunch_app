import { BackendAPIResult } from "../../../shared/infrastructure/services/AxiosProvider";
import HttpRequest from "../../../shared/domain/HttpRequest";
import InventoryRepository from "../../domain/InventoryRepository";
import Ingredient from "../../domain/Ingredient";
import { GetAllIngredientsData } from "./AxiosInventoryResponsePayloadData";

export default class AxiosInventoryRepository implements InventoryRepository {
	constructor(private readonly httpRequest: HttpRequest) {}
	//#region Methods
	async getAllIngredients(): Promise<Ingredient[]> {
		const { payload } = await this.httpRequest.get<
			BackendAPIResult<GetAllIngredientsData>
		>("/inventory/ingredients");
		return payload.data.ingredients;
	}
	//#endregion
}
