import MySqlContext from "../../../shared/infrastructure/persistence/MySqlContext";
import IngredientId from "../../domain/IngredientId";
import IngredientQuantity from "../../domain/IngredientQuantity";
import IngredientSuppliedOn from "../../domain/IngredientSuppliedOn";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";
import SupplyHistoryRecordId from "../../domain/SupplyHistoryRecordId";
import SupplyRepository from "../../domain/SupplyRepository";

export default class MySqlSupplyRepository implements SupplyRepository {
	constructor(private readonly supplyDatabase: MySqlContext) {}
	//#region Methods
	async getSupplyHistory(ingredientId: IngredientId): Promise<SupplyHistoryRecord[]> {
		const [resultset] = await this.supplyDatabase.query(
			"SELECT * FROM supply_history WHERE ingredient_id = ? ORDER BY supplied_on DESC;",
			[ingredientId.value]
		);
		return resultset.map(
			record =>
				new SupplyHistoryRecord(
					new SupplyHistoryRecordId(record["id"]),
					new IngredientId(record["ingredient_id"]),
					new IngredientQuantity(record["quantity"]),
					new IngredientSuppliedOn(record["supplied_on"])
				)
		);
	}
	async recordSupply(
		supplyHistoryRecord: SupplyHistoryRecord
	): Promise<void> {
		const { id, ingredientId, quantity, suppliedOn } = supplyHistoryRecord;
		this.supplyDatabase.query(
			"INSERT INTO supply_history(id, ingredient_id, quantity, supplied_on) VALUES (?, ?, ?, ?, ?);",
			[id, ingredientId, quantity.value, suppliedOn]
		);
	}
	//#endregion
}
