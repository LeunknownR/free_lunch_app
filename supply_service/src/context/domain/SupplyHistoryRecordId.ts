import SupplyHistoryError from "./SupplyHistoryError";

export default class SupplyHistoryRecordId {
	//#region Attributes
	readonly value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new SupplyHistoryError("Invalid supply history record id");
		this.value = value;
	}
	//#region Methods
	private isPositiveNumber(value: number): boolean {
		return value > 0;
	}
	//#endregion
}