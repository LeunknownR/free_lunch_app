import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";

export default class SupplyHistoryRecordDTO {
	//#region Attributes
	id: string;
	quantity: number;
	suppliedOn: string;
	//#endregion
	constructor(supplyHistoryRecord: SupplyHistoryRecord) {
		this.id = supplyHistoryRecord.id;
		this.quantity = supplyHistoryRecord.quantity.value;
		this.suppliedOn = supplyHistoryRecord.suppliedOn.toISOString();
	}
}
