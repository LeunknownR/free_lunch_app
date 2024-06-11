import Ingredient from "../../domain/Ingredient";
import IngredientId from "../../domain/IngredientId";
import IngredientLabel from "../../domain/IngredientLabel";
import IngredientStock from "../../domain/IngredientStock";
import StorageRepository from "../../domain/StorageRepository";
import MySqlContext from "../../../../shared/infrastructure/persistence/MySqlContext";

export default class MySqlStorageRepository implements StorageRepository {
	constructor(private readonly inventoryDatabase: MySqlContext) {}
	//#region Methods
	async getAllIngredients(): Promise<Ingredient[]> {
		const [resultset] = await this.inventoryDatabase.query("SELECT id, label, stock FROM ingredient;");
		return resultset.map(record => new Ingredient(
			new IngredientId(record["id"]),
			new IngredientLabel(record["label"]),
			new IngredientStock(record["stock"])
		));
	}
	//#endregion
}