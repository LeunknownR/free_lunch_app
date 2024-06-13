import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientSuppliedOn {
	readonly value: Date;
	constructor(value: Date) {
		if (this.isFuture(value)) 
			throw new SupplyHistoryError("Invalid supply history record supplied on");
		this.value = value;
	}
	static Issue(): IngredientSuppliedOn {
		return new IngredientSuppliedOn(new Date());
	}
	private isFuture(value: Date): boolean {
		const today = new Date();
		return value > today;
	}
}