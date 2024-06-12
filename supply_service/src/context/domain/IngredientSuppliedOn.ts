import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientSuppliedOn {
	readonly value: Date;
	constructor(value: Date) {
		if (!this.isPastOrToday(value)) 
			throw new SupplyHistoryError("Invalid supply history record supplied on");
		this.value = value;
	}
	private isPastOrToday(value: Date): boolean {
		const today = new Date();
		return value <= today;
	}
}