import SupplyHistoryError from "./SupplyHistoryError";
import { randomUUID } from "crypto";

export default class SupplyHistoryRecordId {
	//#region Attributes
	readonly value: string;
	//#endregion
	constructor(value: string) {
		if (!value) 
			throw new SupplyHistoryError("Invalid supply history record id");
		this.value = value;
	}
	static Create(): SupplyHistoryRecordId {
		return new SupplyHistoryRecordId(randomUUID());
	}
}