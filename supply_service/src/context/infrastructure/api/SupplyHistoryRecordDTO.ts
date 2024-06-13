import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";

export default class SupplyHistoryRecordDTO {
	//#region Attributes
	id: string;
	ingredient: {
		id: string;
		label: string;
	};
	quantity: number;
	suppliedOn: Date;
	//#endregion
	constructor(supplyHistoryRecord: SupplyHistoryRecord) {
		this.id = supplyHistoryRecord.id;
		this.ingredient = {
			id: supplyHistoryRecord.ingredientId,
			label: supplyHistoryRecord.ingredientLabel,
		};
		this.quantity = supplyHistoryRecord.quantity.value;
		this.suppliedOn = supplyHistoryRecord.suppliedOn;
	}
}
