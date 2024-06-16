import Ingredient from "../../domain/Ingredient";
import IngredientId from "../../domain/IngredientId";
import IngredientLabel from "../../domain/IngredientLabel";
import IngredientStock from "../../domain/IngredientStock";
import InventoryRepository from "../../domain/InventoryRepository";
import MySqlContext from "../../../shared/infrastructure/persistence/MySqlContext";
import IngredientImage from "../../domain/IngredientImage";

export default class MySqlInventoryRepository implements InventoryRepository {
	constructor(private readonly inventoryDatabase: MySqlContext) {}
	//#region Methods
	private toIngredient(record: any): Ingredient {
		return new Ingredient(
			new IngredientId(record["id"]),
			new IngredientLabel(record["label"]),
			new IngredientImage(record["image"]),
			new IngredientStock(record["stock"])
		);
	}
	async getAllIngredients(): Promise<Ingredient[]> {
		const [resultset] = await this.inventoryDatabase.query(
			"SELECT * FROM ingredient;"
		);
		return resultset.map(this.toIngredient.bind(this));
	}
	async findIngredients(
		ingredientsIds: IngredientId[]
	): Promise<Ingredient[]> {
		const ingredientsToSearch = ingredientsIds.map(ingredientsId => ingredientsId.value);
		const [resultset] = await this.inventoryDatabase.query(
			"SELECT * FROM ingredient WHERE id IN (?);",
			[ingredientsToSearch]
		);
		return resultset.map(this.toIngredient.bind(this));
	}
	async updateIngredientStocks(
		newInventoryIngredients: Ingredient[]
	): Promise<void> {
		await Promise.all(
			newInventoryIngredients.map(({ id, stock }) => {
				return this.inventoryDatabase.query(
					"UPDATE ingredient SET stock = ? WHERE id = ?;",
					[stock.value, id]
				);
			})
		);
	}
	//#endregion
}
