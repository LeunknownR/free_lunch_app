import MySqlContext from "../../../shared/infrastructure/persistence/MySqlContext";
import IngredientId from "../../domain/IngredientId";
import IngredientQuantity from "../../domain/IngredientQuantity";
import IngredientSuppliedOn from "../../domain/IngredientSuppliedOn";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";
import SupplyHistoryRecordId from "../../domain/SupplyHistoryRecordId";
import SupplyingRepository from "../../domain/SupplyingRepository";

export default class MySqlSupplyingRepository implements SupplyingRepository {
	constructor(private readonly inventoryDatabase: MySqlContext) {}
	//#region Methods
	async getSupplyHistory(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]> {
		const [resultset] = await this.inventoryDatabase.query("SELECT id, quantity, supplied_on FROM supply_history WHERE ingredient_id = ?;", [ingredientId.value]);
		return resultset.map(record => new SupplyHistoryRecord(
			new SupplyHistoryRecordId(record["id"]),
			new IngredientQuantity(record["quantity"]),
			new IngredientSuppliedOn(record["supplied_on"])
		));
	}
	//#endregion
}